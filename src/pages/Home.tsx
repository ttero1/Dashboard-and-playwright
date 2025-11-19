// src/pages/Home.tsx
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
          Welcome to the Dashboard
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Monitor your product warranties and system health in real time — all in one place.
        </p>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {/* Extended Warranty Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Extended Warranty Status</h2>
            <p className="mt-4 text-gray-600">
              View purchase dates, standard coverage end dates, and extended warranty details for all your registered products.
            </p>
            <div className="mt-8">
              <NavLink
                to="/warranty"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                View Warranties
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
            </div>
          </div>

          {/* Site Health Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Site Health Monitoring</h2>
            <p className="mt-4 text-gray-600">
              Real-time status of critical services: API gateway, database, cache, payments, and more.
            </p>
            <div className="mt-8">
              <NavLink
                to="/health"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition"
              >
                Check System Health
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center text-gray-500">
          <p>Built with Vite + React + TypeScript + Tailwind CSS • E2E tested with Playwright</p>
        </div>
      </div>
    </div>
  );
}