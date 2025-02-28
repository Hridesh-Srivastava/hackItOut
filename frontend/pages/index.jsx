"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { BarChart, LineChart, Wind, Sun, MapPin, Calendar, ArrowUpRight } from "lucide-react"

export default function Home() {
  const [forecastData, setForecastData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This will be replaced with actual API call later
    setTimeout(() => {
      setForecastData({
        solarForecast: [25, 30, 45, 60, 75, 65, 40],
        windForecast: [15, 25, 20, 35, 30, 40, 35],
        location: "San Francisco, CA",
        lastUpdated: new Date().toLocaleString(),
      })
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Head>
        <title>EcoForecast - Renewable Energy Prediction</title>
        <meta name="description" content="AI-powered renewable energy forecasting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Wind className="h-8 w-8 text-green-500 mr-2" />
              <Sun className="h-8 w-8 text-yellow-500 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">EcoForecast</h1>
            </div>
            <nav className="flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-green-600 font-medium">
                Dashboard
              </Link>
              <Link href="/forecast" className="text-gray-500 hover:text-green-600 font-medium">
                Forecasts
              </Link>
              <Link href="/analytics" className="text-gray-500 hover:text-green-600 font-medium">
                Analytics
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-green-600 font-medium">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Renewable Energy Forecast</h2>
          <p className="text-gray-600">
            Real-time predictions for solar and wind energy generation to optimize energy planning.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Solar Energy</h3>
                  <Sun className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="text-3xl font-bold text-gray-900">65 kWh</p>
                <p className="text-sm text-green-600 flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  12% from yesterday
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Wind Energy</h3>
                  <Wind className="h-6 w-6 text-blue-500" />
                </div>
                <p className="text-3xl font-bold text-gray-900">40 kWh</p>
                <p className="text-sm text-green-600 flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  8% from yesterday
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-xl font-medium text-gray-900">{forecastData.location}</p>
                <p className="text-sm text-gray-500 mt-2">Default monitoring station</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Last Updated</h3>
                  <Calendar className="h-6 w-6 text-purple-500" />
                </div>
                <p className="text-xl font-medium text-gray-900">{forecastData.lastUpdated}</p>
                <p className="text-sm text-gray-500 mt-2">Real-time data</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Solar Energy Forecast (7-day)</h3>
                  <BarChart className="h-6 w-6 text-gray-500" />
                </div>
                <div className="h-64 flex items-end justify-between">
                  {forecastData.solarForecast.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="bg-yellow-400 rounded-t w-12" style={{ height: `${value * 2}px` }}></div>
                      <span className="text-xs mt-2 text-gray-500">Day {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Wind Energy Forecast (7-day)</h3>
                  <LineChart className="h-6 w-6 text-gray-500" />
                </div>
                <div className="h-64 flex items-end justify-between">
                  {forecastData.windForecast.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="bg-blue-400 rounded-t w-12" style={{ height: `${value * 2}px` }}></div>
                      <span className="text-xs mt-2 text-gray-500">Day {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <p className="text-gray-500">© 2025 EcoForecast. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

