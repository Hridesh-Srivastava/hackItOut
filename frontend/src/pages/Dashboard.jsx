"use client"

import { useState, useEffect } from "react"
import { FiSun, FiWind, FiTrendingUp, FiTrendingDown } from "react-icons/fi"
import EnergyChart from "../components/EnergyChart"
import WeatherWidget from "../components/WeatherWidget"
import ForecastSummary from "../components/ForecastSummary"

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dashboardData, setDashboardData] = useState(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        // In a real app, this would be an API call
        // const response = await api.get('/dashboard')
        // setDashboardData(response.data)

        // Mock data for demonstration
        setDashboardData({
          currentEnergy: {
            solar: 45.2,
            wind: 32.8,
            total: 78.0,
          },
          forecast: {
            today: 82.5,
            tomorrow: 76.3,
            trend: "down",
          },
          weather: {
            temperature: 22,
            windSpeed: 15,
            sunlight: 75,
          },
        })
        setLoading(false)
      } catch (err) {
        setError("Failed to load dashboard data")
        setLoading(false)
        console.error(err)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) return <div className="flex justify-center items-center h-full">Loading dashboard...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Renewable Energy Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Solar Energy</p>
              <h3 className="text-2xl font-bold">{dashboardData.currentEnergy.solar} MWh</h3>
            </div>
            <FiSun className="h-10 w-10 opacity-80" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Wind Energy</p>
              <h3 className="text-2xl font-bold">{dashboardData.currentEnergy.wind} MWh</h3>
            </div>
            <FiWind className="h-10 w-10 opacity-80" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-500 to-emerald-500 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Total Generation</p>
              <h3 className="text-2xl font-bold">{dashboardData.currentEnergy.total} MWh</h3>
            </div>
            <div className="flex items-center">
              {dashboardData.forecast.trend === "up" ? (
                <FiTrendingUp className="h-10 w-10 opacity-80" />
              ) : (
                <FiTrendingDown className="h-10 w-10 opacity-80" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Energy Generation Forecast</h2>
        <EnergyChart />
      </div>

      {/* Weather and Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Current Weather Conditions</h2>
          <WeatherWidget
            temperature={dashboardData.weather.temperature}
            windSpeed={dashboardData.weather.windSpeed}
            sunlight={dashboardData.weather.sunlight}
          />
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Forecast Summary</h2>
          <ForecastSummary
            today={dashboardData.forecast.today}
            tomorrow={dashboardData.forecast.tomorrow}
            trend={dashboardData.forecast.trend}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

