// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './App';
import HomePage from './pages/HomePage';
import ExtendedWarrantyPage from './pages/ExtendedWarranty';
import SiteHealthPage from './pages/SiteHealth';
import './index.css'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'warranty', element: <ExtendedWarrantyPage /> },
      { path: 'health', element: <SiteHealthPage /> },
      {
        path: '*',
        element: (
          <div className="text-center py-32">
            <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700">404</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Page not found</p>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);