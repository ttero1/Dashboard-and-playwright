// src/App.tsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import ExtendedWarrantyPage from './pages/ExtendedWarranty';
import SiteHealthPage from './pages/SiteHealth';
import Home from './pages/Home';
import './App.css';

// Simple shared layout with navigation
function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">My Dashboard</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-medium border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 transition'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/warranty"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-medium border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 transition'
                }
              >
                Extended Warranty
              </NavLink>
              <NavLink
                to="/health"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-medium border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 transition'
                }
              >
                Site Health
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/warranty"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                Extended Warranty
              </NavLink>
              <NavLink
                to="/health"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                Site Health
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

// Home page (cleaned-up version of the original Vite template)
function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <div className="flex justify-center gap-16 my-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src="/src/assets/react.svg" className="logo react h-24 w-24" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Vite + React + TypeScript</h1>

      <div className="card max-w-sm mx-auto bg-white rounded-xl shadow-md p-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">New Features Added</h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li>Extended Warranty Status Dashboard</li>
            <li>Real-time Site Health Monitoring</li>
            <li>Responsive Navigation</li>
            <li>Playwright E2E Tests (20%+ coverage)</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="space-y-3">
            <NavLink to="/warranty" className="block text-blue-600 hover:underline font-medium">
              → View Extended Warranty Status
            </NavLink>
            <NavLink to="/health" className="block text-blue-600 hover:underline font-medium">
              → Monitor Site Health
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/warranty" element={<ExtendedWarrantyPage />} />
          <Route path="/health" element={<SiteHealthPage />} />
          <Route path="*" element={<div className="text-center py-20"><h1 className="text-4xl">404 - Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;