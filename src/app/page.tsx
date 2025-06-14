import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl text-white">
            Welcome to Etherion AI
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            Transform your business operations with intelligent AI solutions
          </p>
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
            <Link to="/get-started" className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 sm:px-4 py-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
