"use client"

import { useState } from "react"
import { FiCalendar, FiMapPin } from "react-icons/fi"
import EnergyChart from "../components/EnergyChart"

const ForecastPage = () => {
  const [location, setLocation] = useState("New York")
  const [forecastDays, setForecastDays] = useState(7)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Energy Generation Forecast</h1>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Location</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMapPin className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
              </select>
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Forecast Period</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={forecastDays}
                onChange={(e) => setForecastDays(Number(e.target.value))}
              >
                <option value={1}>1 Day</option>
                <option value={3}>3 Days</option>
                <option value={7}>7 Days</option>
                <option value={14}>14 Days</option>
                <option value={30}>30 Days</option>
              </select>
            </div>
          </div>

          <div className="flex items-end">
            <button className="btn-primary">Update Forecast</button>
          </div>
        </div>
      </div>

      {/* Forecast Chart */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Energy Forecast for {location}</h2>
        <div className="h-80">
          <EnergyChart />
        </div>
      </div>

      {/* Forecast Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Solar Energy Forecast</h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Predicted solar energy generation based on weather forecasts and historical data.
          </p>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((day) => (
              <div
                key={`solar-day-${day}`}
                className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded"
              >
                <span>Day {day}</span>
                <span className="font-medium">{Math.floor(40 + Math.random() * 30)} MWh</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Wind Energy Forecast</h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Predicted wind energy generation based on weather forecasts and historical data.
          </p>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((day) => (
              <div
                key={`wind-day-${day}`}
                className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded"
              >
                <span>Day {day}</span>
                <span className="font-medium">{Math.floor(25 + Math.random() * 25)} MWh</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForecastPage

