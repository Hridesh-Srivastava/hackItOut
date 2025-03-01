import asyncHandler from "express-async-handler";
import axios from "axios";

// @desc    Fetch current weather data
// @route   GET /api/weather/current/:location
// @access  Public
const getCurrentWeather = asyncHandler(async (req, res) => {
  const { location } = req.params;

  const { data } = await axios.get(
    `${process.env.WEATHER_API_URL}/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`
  );

  if (data) {
    res.json({
      location: data.location.name,
      region: data.location.region,
      country: data.location.country,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      wind_kph: data.current.wind_kph,
      wind_mph: data.current.wind_mph,
      humidity: data.current.humidity,
      cloud: data.current.cloud,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      uv: data.current.uv,
      source: "API",
    });
  } else {
    res.status(404);
    throw new Error("Weather data not found");
  }
});

// @desc    Fetch weather forecast data
// @route   GET /api/weather/forecast/:location/:days
// @access  Public
const getWeatherForecast = asyncHandler(async (req, res) => {
  const { location, days } = req.params;

  const { data } = await axios.get(
    `${process.env.WEATHER_API_URL}/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=${days}`
  );

  if (data) {
    res.json(data.forecast.forecastday);
  } else {
    res.status(404);
    throw new Error("Weather forecast data not found");
  }
});

// @desc    Fetch historical weather data
// @route   GET /api/weather/historical/:location/:startDate/:endDate
// @access  Public
const getHistoricalWeather = asyncHandler(async (req, res) => {
  const { location, startDate, endDate } = req.params;

  const { data } = await axios.get(
    `${process.env.WEATHER_API_URL}/history.json?key=${process.env.WEATHER_API_KEY}&q=${location}&dt=${startDate}&end_dt=${endDate}`
  );

  if (data) {
    res.json(data.forecast.forecastday);
  } else {
    res.status(404);
    throw new Error("Historical weather data not found");
  }
});

export { getCurrentWeather, getWeatherForecast, getHistoricalWeather };