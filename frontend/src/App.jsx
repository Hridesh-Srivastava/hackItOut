import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import ForecastPage from "./pages/ForecastPage"
import HistoricalData from "./pages/HistoricalData"
import Settings from "./pages/Settings"
import NotFound from "./pages/NotFound"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {
  return (
    <Routes>
      {/* Auth routes outside of Layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Main layout with nested routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="forecast" element={<ForecastPage />} />
        <Route path="historical" element={<HistoricalData />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

