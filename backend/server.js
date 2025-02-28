import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import forecastRoutes from "./routes/forecastRoutes.js"
import locationRoutes from "./routes/locationRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

app.use("/api/forecasts", forecastRoutes)
app.use("/api/locations", locationRoutes)
app.use("/api/users", userRoutes)

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app

