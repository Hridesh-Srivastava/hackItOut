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

const EnergyChart = () => {
  const labels = ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"]

  const data = {
    labels,
    datasets: [
      {
        label: "Solar Energy (MWh)",
        data: [5, 20, 45, 60, 35, 10],
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        tension: 0.3,
      },
      {
        label: "Wind Energy (MWh)",
        data: [30, 25, 20, 25, 35, 40],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0.3,
      },
      {
        label: "Total Energy (MWh)",
        data: [35, 45, 65, 85, 70, 50],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        tension: 0.3,
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
        text: "Today's Energy Generation",
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
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
    },
  }

  return <Line options={options} data={data} />
}

export default EnergyChart

