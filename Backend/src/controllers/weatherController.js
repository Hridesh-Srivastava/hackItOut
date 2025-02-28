import asyncHandler from "express-async-handler"
import axios from "axios"
import WeatherData from "../models/weatherDataModel.js"

const getCurrentWeather = asyncHandler(async (req, res) => {
  const { location } = req.params

  try {
    const recentData = await WeatherData.findOne({
      location: location,
      date: { $gte: new Date(Date.now() - 60 * 60 * 1000) },
      source: "API",
    }).sort({ date: -1 })

    if (recentData) {
      return res.json(recentData)
    }

    // If no recent data, fetch from external API
    const response = await axios.get(`${process.env.WEATHER_API_URL}/current.json`, {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: location,
      },
    })

    const { current, location: locationData } = response.data

    // Transform the data to our model format
    const weatherData = new WeatherData({
      location: locationData.name,
      date: new Date(),
      temperature: current.temp_c,
      windSpeed: current.wind_kph,
      windDirection: current.wind_degree,
      humidity: current.humidity,
      cloudCover: current.cloud,
      precipitation: current.precip_mm,
      solarRadiation: current.uv * 10, 
      source: "API",
    })

    // Save to DB
    await weatherData.save()

    res.json(weatherData)
  } catch (error) {
    console.error(`Error fetching weather data: ${error.message}`)
    res.status(500)
    throw new Error("Failed to fetch weather data")
  }
})


const getWeatherForecast = asyncHandler(async (req, res) => {
  const { location, days } = req.params
  const forecastDays = Number.parseInt(days) || 7

  try {
    
    const response = await axios.get(`${process.env.WEATHER_API_URL}/forecast.json`, {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: location,
        days: forecastDays,
      },
    })

    const { forecast, location: locationData } = response.data

    // Transform and save each forecast day
    const weatherDataPromises = forecast.forecastday.map(async (day) => {
      const weatherData = new WeatherData({
        location: locationData.name,
        date: new Date(day.date),
        temperature: day.day.avgtemp_c,
        windSpeed: day.day.maxwind_kph,
        windDirection: 0, 
        humidity: day.day.avghumidity,
        cloudCover: 0,
        precipitation: day.day.totalprecip_mm,
        solarRadiation: day.day.uv * 10, 
        source: "API",
      })

      // Check if we already have this forecast day
      const existingForecast = await WeatherData.findOne({
        location: locationData.name,
        date: {
          $gte: new Date(day.date),
          $lt: new Date(new Date(day.date).setDate(new Date(day.date).getDate() + 1)),
        },
        source: "API",
      })

      if (!existingForecast) {
        await weatherData.save()
      }

      return weatherData
    })

    const weatherDataResults = await Promise.all(weatherDataPromises)
    res.json(weatherDataResults)
  } catch (error) {
    console.error(`Error fetching weather forecast: ${error.message}`)
    res.status(500)
    throw new Error("Failed to fetch weather forecast")
  }
})

const getHistoricalWeather = asyncHandler(async (req, res) => {
  const { location, startDate, endDate } = req.params

  try {
    const start = new Date(startDate)
    const end = new Date(endDate)

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      res.status(400)
      throw new Error("Invalid date format. Use YYYY-MM-DD")
    }
// query db for historic data
    const historicalData = await WeatherData.find({
      location: location,
      date: { $gte: start, $lte: end },
    }).sort({ date: 1 })

    res.json(historicalData)
  } catch (error) {
    console.error(`Error fetching historical weather: ${error.message}`)
    res.status(500)
    throw new Error("Failed to fetch historical weather data")
  }
})

export { getCurrentWeather, getWeatherForecast, getHistoricalWeather }

