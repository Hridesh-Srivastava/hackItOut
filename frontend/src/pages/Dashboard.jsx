import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function Dashboard() {
  // Sample data - in a real app, this would come from your API
  const [energyData, setEnergyData] = useState([
    { name: '00:00', solar: 0, wind: 120, total: 120 },
    { name: '03:00', solar: 0, wind: 140, total: 140 },
    { name: '06:00', solar: 20, wind: 160, total: 180 },
    { name: '09:00', solar: 180, wind: 120, total: 300 },
    { name: '12:00', solar: 250, wind: 100, total: 350 },
    { name: '15:00', solar: 200, wind: 130, total: 330 },
    { name: '18:00', solar: 80, wind: 150, total: 230 },
    { name: '21:00', solar: 0, wind: 130, total: 130 },
  ]);

  const [stats, setStats] = useState({
    totalGeneration: '1,780 kWh',
    solarPercentage: '41%',
    windPercentage: '59%',
    carbonSaved: '890 kg',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Energy Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Real-time overview of renewable energy generation and forecasts
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Total Generation</h3>
          <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{stats.totalGeneration}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Today</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Solar Energy</h3>
          <p className="text-3xl font-bold text-yellow-500">{stats.solarPercentage}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">of total generation</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Wind Energy</h3>
          <p className="text-3xl font-bold text-blue-500">{stats.windPercentage}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">of total generation</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Carbon Saved</h3>
          <p className="text-3xl font-bold text-green-500">{stats.carbonSaved}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">CO₂ equivalent</p>
        </div>
      </div>

      {/* Energy Generation Chart */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Energy Generation Today</h2>
        {loading ? (
          <div className="flex justify-center items-center h-80">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={energyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit=" kWh" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="solar" stackId="1" stroke="#EAB308" fill="#FDE68A" name="Solar" />
                <Area type="monotone" dataKey="wind" stackId="1" stroke="#0EA5E9" fill="#BAE6FD" name="Wind" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Forecast Preview */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Tomorrow's Forecast</h2>
          <a href="/forecast" className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium">
            View Full Forecast →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Morning</h3>
            <div className="flex items-center">
              <svg className="h-10 w-10 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div>
                <p className="text-2xl font-bold">120 kWh</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Mostly Solar</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Afternoon</h3>
            <div className="flex items-center">
              <svg className="h-10 w-10 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div>
                <p className="text-2xl font-bold">210 kWh</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Peak Solar</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Evening</h3>
            <div className="flex items-center">
              <svg className="h-10 w-10 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              <div>
                <p className="text-2xl font-bold">150 kWh</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Mostly Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;