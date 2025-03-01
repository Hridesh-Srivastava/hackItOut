"use client"

import { useState } from "react"
import { FiSave } from "react-icons/fi"

const Settings = () => {
  const [settings, setSettings] = useState({
    apiKey: "",
    weatherApiEndpoint: "https://api.weatherapi.com/v1",
    refreshInterval: 30,
    forecastDays: 7,
    location: "New York",
    notifications: true,
    darkMode: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save settings logic would go here
    alert("Settings saved successfully!")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* API Settings */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">API Configuration</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="apiKey" className="block text-sm font-medium mb-1">
                Weather API Key
              </label>
              <input
                type="password"
                id="apiKey"
                name="apiKey"
                value={settings.apiKey}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your API key"
              />
              <p className="mt-1 text-sm text-gray-500">
                Required for fetching weather data. Get your API key from the weather service provider.
              </p>
            </div>

            <div>
              <label htmlFor="weatherApiEndpoint" className="block text-sm font-medium mb-1">
                Weather API Endpoint
              </label>
              <input
                type="text"
                id="weatherApiEndpoint"
                name="weatherApiEndpoint"
                value={settings.weatherApiEndpoint}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Forecast Settings */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Forecast Settings</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="refreshInterval" className="block text-sm font-medium mb-1">
                Data Refresh Interval (minutes)
              </label>
              <input
                type="number"
                id="refreshInterval"
                name="refreshInterval"
                value={settings.refreshInterval}
                onChange={handleChange}
                min="5"
                max="60"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="forecastDays" className="block text-sm font-medium mb-1">
                Default Forecast Days
              </label>
              <select
                id="forecastDays"
                name="forecastDays"
                value={settings.forecastDays}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value={1}>1 Day</option>
                <option value={3}>3 Days</option>
                <option value={7}>7 Days</option>
                <option value={14}>14 Days</option>
                <option value={30}>30 Days</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">
                Default Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={settings.location}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Application Settings */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Application Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="notifications" className="ml-2 block text-sm">
                Enable Notifications
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="darkMode"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="darkMode" className="ml-2 block text-sm">
                Dark Mode
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="btn-primary flex items-center gap-2">
            <FiSave />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Settings

