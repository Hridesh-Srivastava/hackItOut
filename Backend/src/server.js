import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import connectDB from "./config/db.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

import weatherRoutes from "./routes/weatherRoutes.js"
import forecastRoutes from "./routes/forecastRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(cors())
app.use(express.json())

app.use("/api/weather", weatherRoutes)
app.use("/api/forecasts", forecastRoutes)
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
  res.send("API is running...")
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

