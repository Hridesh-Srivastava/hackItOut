import express from "express"
import { getCurrentWeather, getWeatherForecast, getHistoricalWeather } from "../controllers/weatherController.js"

const router = express.Router()

router.get("/current/:location", getCurrentWeather)
router.get("/forecast/:location/:days", getWeatherForecast)
router.get("/historical/:location/:startDate/:endDate", getHistoricalWeather)

export default router

