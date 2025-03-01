import { FiSun, FiWind, FiThermometer } from "react-icons/fi"

const WeatherWidget = ({ temperature, windSpeed, sunlight }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <FiThermometer className="h-8 w-8 text-red-500 mb-2" />
        <span className="text-lg font-semibold">{temperature}°C</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Temperature</span>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <FiWind className="h-8 w-8 text-blue-500 mb-2" />
        <span className="text-lg font-semibold">{windSpeed} km/h</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Wind Speed</span>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <FiSun className="h-8 w-8 text-yellow-500 mb-2" />
        <span className="text-lg font-semibold">{sunlight}%</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Sunlight</span>
      </div>
    </div>
  )
}

export default WeatherWidget

