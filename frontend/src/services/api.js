import axios from "axios";

// Create an axios instance with default config
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Ensure this matches your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const { token } = JSON.parse(userData);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API Error:", error.response.data);

      if (error.response.status === 401) {
        // Handle unauthorized access - clear user data and redirect to login
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up request:", error.message);
    }

    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: (credentials) => api.post("/users/login", credentials),
  register: (userData) => api.post("/users/register", userData),
  getUserProfile: () => api.get("/users/profile"),
  updateUserProfile: (userData) => api.put("/users/profile", userData),
};

export default api;