"use client"

import { useState } from "react"
import Link from "next/link"
import { User } from "lucide-react"

const UserProfileLogo = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <User className="h-6 w-6" />
        <span>{user ? user.name : "Guest"}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {user ? (
            <>
              <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </Link>
              <button
                onClick={() => {
                  onLogout()
                  setIsOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Login
              </Link>
              <Link href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default UserProfileLogo

