import axios from "axios"

// Create an axios instance with default config
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle common errors here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API Error:", error.response.data)

      if (error.response.status === 401) {
        // Handle unauthorized access
        console.error("Unauthorized access")
        // Redirect to login or show notification
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up request:", error.message)
    }

    return Promise.reject(error)
  },
)

export default api

