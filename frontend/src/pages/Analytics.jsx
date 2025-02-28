function Analytics() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Energy Analytics</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            In-depth analysis of renewable energy generation patterns
          </p>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Historical Performance</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This page will provide detailed analytics on historical energy generation, including:
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Comparison of actual vs. forecasted generation</li>
            <li>Seasonal patterns and trends</li>
            <li>Efficiency metrics and optimization opportunities</li>
            <li>Carbon emission reduction statistics</li>
          </ul>
          <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-center text-gray-500 dark:text-gray-400">
              Analytics data will be displayed here once the AI model is integrated.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Analytics;