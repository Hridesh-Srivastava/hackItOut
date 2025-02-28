import { useState } from 'react';

function Settings() {
  const [settings, setSettings] = useState({
    location: 'New York',
    notifications: true,
    darkMode: false,
    dataRefreshRate: '15',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Configure your energy forecasting dashboard
        </p>
      </div>
      
      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">General Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={settings.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="dataRefreshRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Data Refresh Rate (minutes)
                </label>
                <select
                  id="dataRefreshRate"
                  name="dataRefreshRate"
                  value={settings.dataRefreshRate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="5">5 minutes</option>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Preferences</h2>
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
                <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Enable notifications
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
                <label htmlFor="darkMode" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Dark mode
                </label>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="btn-primary"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;