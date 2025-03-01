import mongoose from "mongoose"

const weatherDataSchema = mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    windSpeed: {
      type: Number,
      required: true,
    },
    windDirection: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    cloudCover: {
      type: Number,
      required: true,
    },
    precipitation: {
      type: Number,
      required: true,
    },
    solarRadiation: {
      type: Number,
      required: true,
    },
    source: {
      type: String,
      required: true,
      enum: ["API", "HISTORICAL", "USER_INPUT"],
    },
  },
  {
    timestamps: true,
  },
)

// Create a compound index for efficient querying
weatherDataSchema.index({ location: 1, date: 1 })

const WeatherData = mongoose.model("WeatherData", weatherDataSchema)

export default WeatherData

