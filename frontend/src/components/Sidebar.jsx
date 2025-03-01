import { NavLink } from "react-router-dom"
import { FiHome, FiTrendingUp, FiDatabase, FiSettings, FiInfo } from "react-icons/fi"
import { WiDaySunny, WiStrongWind } from "react-icons/wi"

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Forecasts", path: "/forecast", icon: <FiTrendingUp /> },
    { name: "Historical Data", path: "/historical", icon: <FiDatabase /> },
    { name: "Settings", path: "/settings", icon: <FiSettings /> },
  ]

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-800">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <div className="flex items-center space-x-2">
              <div className="flex">
                <WiDaySunny className="h-8 w-8 text-yellow-400" />
                <WiStrongWind className="h-8 w-8 text-blue-400 -ml-2" />
              </div>
              <span className="text-white text-lg font-medium">EnergyForecast</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`
                  }
                >
                  <span className="mr-3 h-5 w-5">{item.icon}</span>
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <div className="p-4">
              <div className="bg-gray-700 p-3 rounded-md">
                <div className="flex items-center text-sm font-medium text-white mb-2">
                  <FiInfo className="mr-2" />
                  <span>Energy Tip</span>
                </div>
                <p className="text-xs text-gray-300">
                  Solar panels are most efficient when they receive direct sunlight. Keep them clean for optimal
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

