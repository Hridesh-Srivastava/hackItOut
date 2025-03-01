import { FiTrendingUp, FiTrendingDown } from "react-icons/fi"

const ForecastSummary = ({ today, tomorrow, trend }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Today's Forecast</span>
          <p className="text-lg font-semibold">{today} MWh</p>
        </div>
        <div className="text-green-500">
          <span className="text-lg font-semibold">Optimal</span>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Tomorrow's Forecast</span>
          <p className="text-lg font-semibold">{tomorrow} MWh</p>
        </div>
        <div className="flex items-center">
          {trend === "up" ? (
            <>
              <FiTrendingUp className="h-5 w-5 text-green-500 mr-1" />
              <span className="text-green-500">+7.5%</span>
            </>
          ) : (
            <>
              <FiTrendingDown className="h-5 w-5 text-red-500 mr-1" />
              <span className="text-red-500">-7.5%</span>
            </>
          )}
        </div>
      </div>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h4 className="font-medium mb-2">AI Insights</h4>
        <p className="text-sm">
          Expected decrease in solar energy production tomorrow due to forecasted cloud cover. Wind energy is expected
          to compensate partially for the reduction in solar output.
        </p>
      </div>
    </div>
  )
}

export default ForecastSummary

