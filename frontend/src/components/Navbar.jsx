"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FiMenu, FiSun, FiMoon, FiBell, FiUser } from "react-icons/fi"

const Navbar = () => {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check for dark mode preference
    const savedTheme = localStorage.getItem("darkMode") === "true"
    setDarkMode(savedTheme)
    if (savedTheme) {
      document.documentElement.classList.add("dark")
    }

    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("darkMode", newMode)
    document.documentElement.classList.toggle("dark", newMode)
  }

  const handleUserClick = () => {
    // If user is logged in, show profile or logout options
    // Otherwise redirect to login page
    if (user) {
      // For now, just log out the user
      localStorage.removeItem("user")
      setUser(null)
      navigate("/")
    } else {
      navigate("/login")
    }
  }

  const handleNotificationClick = () => {
    setShowNotification(!showNotification)
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-500 lg:hidden">
              <FiMenu className="h-6 w-6" />
            </button>
            <div className="ml-4 text-xl font-bold text-primary-600 dark:text-primary-400">EnergyForecast AI</div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>
            <div className="relative">
              <button
                onClick={handleNotificationClick}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FiBell className="h-5 w-5" />
              </button>
              {showNotification && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 px-3 z-10 text-sm text-gray-700 dark:text-gray-300">
                  No notifications available for now.
                </div>
              )}
            </div>
            <button onClick={handleUserClick} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              <FiUser className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

