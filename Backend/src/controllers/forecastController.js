import asyncHandler from "express-async-handler"
import EnergyForecast from "../models/energyForecastModel.js"
import WeatherData from "../models/weatherDataModel.js"


const generateForecast = asyncHandler(async (req, res) => {
  const { location, date, modelType = "baseline" } = req.body

  try {
    
    const weatherData = await WeatherData.findOne({
      location,
      date: {
        $gte: new Date(date),
        $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
      },
    })

    if (!weatherData) {
      res.status(404)
      throw new Error("Weather data not found for the specified location and date")
    }

    // Check if forecast already exists
    const existingForecast = await EnergyForecast.findOne({
      location,
      date: {
        $gte: new Date(date),
        $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
      },
    })

    if (existingForecast) {
      return res.json(existingForecast)
    }

   

    
    const solarEnergy = calculateSolarEnergy(weatherData)

    
    const windEnergy = calculateWindEnergy(weatherData)

    
    const totalEnergy = solarEnergy + windEnergy

    // Create a new forecast
    const energyForecast = new EnergyForecast({
      location: weatherData.location,
      date: weatherData.date,
      solarEnergy,
      windEnergy,
      totalEnergy,
      confidence: 70, // Default confidence level
      weatherData: weatherData._id,
      model: modelType,
    })

    await energyForecast.save()

    res.status(201).json(energyForecast)
  } catch (error) {
    console.error(`Error generating forecast: ${error.message}`)
    res.status(500)
    throw new Error("Failed to generate energy forecast")
  }
})


const getForecasts = asyncHandler(async (req, res) => {
  const { location, days } = req.params
  const forecastDays = Number.parseInt(days) || 7

  try {
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + forecastDays)

    const forecasts = await EnergyForecast.find({
      location,
      date: { $gte: startDate, $lte: endDate },
    })
      .populate("weatherData")
      .sort({ date: 1 })

    res.json(forecasts)
  } catch (error) {
    console.error(`Error fetching forecasts: ${error.message}`)
    res.status(500)
    throw new Error("Failed to fetch energy forecasts")
  }
})


const updateActualValues = asyncHandler(async (req, res) => {
  const { solarEnergy, windEnergy, totalEnergy } = req.body

  try {
    const forecast = await EnergyForecast.findById(req.params.id)

    if (!forecast) {
      res.status(404)
      throw new Error("Forecast not found")
    }

    forecast.actualValues = {
      solarEnergy: solarEnergy || forecast.actualValues.solarEnergy,
      windEnergy: windEnergy || forecast.actualValues.windEnergy,
      totalEnergy: totalEnergy || forecast.actualValues.totalEnergy,
      updated: new Date(),
    }

    const updatedForecast = await forecast.save()

    res.json(updatedForecast)
  } catch (error) {
    console.error(`Error updating actual values: ${error.message}`)
    res.status(500)
    throw new Error("Failed to update actual energy values")
  }
})


const calculateSolarEnergy = (weatherData) => {
  
  const solarRadiation = weatherData.solarRadiation
  const cloudCover = weatherData.cloudCover

  return Math.max(0, solarRadiation * (1 - cloudCover / 100) * 0.2)
}


const calculateWindEnergy = (weatherData) => {
  
  const windSpeed = weatherData.windSpeed

  return Math.max(0, Math.pow(windSpeed, 3) * 0.01)
}

export { generateForecast, getForecasts, updateActualValues }

