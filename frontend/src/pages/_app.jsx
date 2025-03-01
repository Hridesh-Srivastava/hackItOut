"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import "../styles/globals.css"
import UserProfileLogo from "../components/UserProfileLogo"

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">EcoForecast</h1>
            </div>
            <UserProfileLogo user={user} onLogout={handleLogout} />
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <p className="text-gray-500">© 2025 EcoForecast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MyApp

