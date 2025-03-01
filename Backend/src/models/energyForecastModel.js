import mongoose from "mongoose"

const energyForecastSchema = mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    solarEnergy: {
      type: Number,
      required: true,
    },
    windEnergy: {
      type: Number,
      required: true,
    },
    totalEnergy: {
      type: Number,
      required: true,
    },
    confidence: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    weatherData: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WeatherData",
      required: true,
    },
    model: {
      type: String,
      required: true,
      default: "baseline",
    },
    actualValues: {
      solarEnergy: {
        type: Number,
        default: null,
      },
      windEnergy: {
        type: Number,
        default: null,
      },
      totalEnergy: {
        type: Number,
        default: null,
      },
      updated: {
        type: Date,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  },
)

// Create a compound index for efficient querying
energyForecastSchema.index({ location: 1, date: 1 })

const EnergyForecast = mongoose.model("EnergyForecast", energyForecastSchema)

export default EnergyForecast

