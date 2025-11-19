// src/pages/HomePage.tsx
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { CheckCircle2, Zap, Shield, Activity } from 'lucide-react';

export default function HomePage() {
  const features = [
    { icon: Shield, text: 'Extended Warranty Dashboard', color: 'text-blue-500' },
    { icon: Activity, text: 'Real-time Site Health Monitoring', color: 'text-green-500' },
    { icon: Zap, text: 'Instant Dark Mode Toggle', color: 'text-purple-500' },
    { icon: CheckCircle2, text: 'Smooth Page Transitions', color: 'text-indigo-500' },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to Your Dashboard
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Monitor warranties, site performance, and system health — all with a modern, delightful experience.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.text}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
            <p className="text-gray-700 dark:text-gray-200 font-medium">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>
        <div className="bg-white dark:bg-black p-4">
       <p className="text-black dark:text-white">Test dark mode</p>
     </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Warranty Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="relative overflow-hidden rounded-2xl shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90" />
          <div className="relative p-10 text-white">
            <Shield className="w-16 h-16 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Extended Warranty</h2>
            <p className="text-blue-100 mb-8 text-lg">
              View status, expiration dates, and coverage details for all your products.
            </p>
            <NavLink
              to="/warranty"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition transform hover:scale-105"
            >
              Open Warranty Dashboard →
            </NavLink>
          </div>
        </motion.div>

        {/* Site Health Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="relative overflow-hidden rounded-2xl shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-90" />
          <div className="relative p-10 text-white">
            <Activity className="w-16 h-16 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Site Health</h2>
            <p className="text-emerald-100 mb-8 text-lg">
              Real-time uptime, performance metrics, and health checks across all services.
            </p>
            <NavLink
              to="/health"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition transform hover:scale-105"
            >
              Monitor Site Health →
            </NavLink>
          </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-gray-500 dark:text-gray-400"
      >
        <p>Built with React 18, React Router v6 Data APIs, Tailwind CSS, Framer Motion</p>
      </motion.div>
    </div>
  );
}