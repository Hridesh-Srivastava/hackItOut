"use client"

import { useState } from "react"
import { FiDownload, FiFilter } from "react-icons/fi"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const HistoricalData = () => {
  const [timeRange, setTimeRange] = useState("month")
  const [energyType, setEnergyType] = useState("all")

  // Mock data
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const data = {
    labels: months,
    datasets: [
      {
        label: "Solar Energy (MWh)",
        data: [45, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        hidden: energyType !== "all" && energyType !== "solar",
      },
      {
        label: "Wind Energy (MWh)",
        data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        hidden: energyType !== "all" && energyType !== "wind",
      },
      {
        label: "Total Energy (MWh)",
        data: [73, 107, 120, 100, 142, 82, 130, 93, 107, 120, 100, 142],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        hidden: energyType !== "all" && energyType !== "total",
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Historical Energy Generation",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Energy (MWh)",
        },
      },
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Historical Data</h1>
        <button className="btn-secondary flex items-center gap-2">
          <FiDownload />
          <span>Export Data</span>
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Time Range</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiFilter className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
                <option value="year">Last Year</option>
              </select>
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Energy Type</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiFilter className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={energyType}
                onChange={(e) => setEnergyType(e.target.value)}
              >
                <option value="all">All Energy Types</option>
                <option value="solar">Solar Only</option>
                <option value="wind">Wind Only</option>
                <option value="total">Total Only</option>
              </select>
            </div>
          </div>

          <div className="flex items-end">
            <button className="btn-primary">Apply Filters</button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Historical Energy Generation</h2>
        <div className="h-96">
          <Line options={options} data={data} />
        </div>
      </div>

      {/* Data Table */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Historical Data Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Month
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Solar Energy (MWh)
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Wind Energy (MWh)
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Total Energy (MWh)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {months.map((month, index) => (
                <tr key={month}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{data.datasets[0].data[index]}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{data.datasets[1].data[index]}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{data.datasets[2].data[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HistoricalData

