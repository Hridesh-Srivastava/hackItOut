function Forecast() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Energy Forecast</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Detailed forecasts for renewable energy generation
          </p>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">7-Day Forecast</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This page will display detailed forecasts for solar and wind energy generation over the next 7 days.
            The AI model will provide predictions based on weather data and historical patterns.
          </p>
          <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-center text-gray-500 dark:text-gray-400">
              Forecast data will be displayed here once the AI model is integrated.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Forecast;