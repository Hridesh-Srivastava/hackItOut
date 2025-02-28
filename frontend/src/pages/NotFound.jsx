import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-primary-600 dark:text-primary-400">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">Page Not Found</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-6 btn-primary">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;