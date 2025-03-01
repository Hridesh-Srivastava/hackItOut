import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-6xl font-bold text-primary-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Go to Dashboard
      </Link>
    </div>
  )
}

export default NotFound

