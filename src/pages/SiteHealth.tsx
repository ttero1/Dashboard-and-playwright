// src/pages/SiteHealthPage.tsx
import { motion } from 'framer-motion';
import { Activity, CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';
import { mockHealth } from '../mocks/mockApi';

function getStatusIcon(status: 'healthy' | 'warning' | 'error') {
  const config = {
    healthy: { icon: CheckCircle, color: 'text-green-500' },
    warning: { icon: AlertTriangle, color: 'text-yellow-500' },
    error: { icon: XCircle, color: 'text-red-500' },
  };
  const { icon: Icon, color } = config[status];
  return <Icon className={`w-8 h-8 ${color}`} />;
}

function getStatusBg(status: 'healthy' | 'warning' | 'error') {
  return {
    healthy: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
  }[status];
}

export default function SiteHealthPage() {
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Site Health Monitoring
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Real-time status of all critical services
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockHealth.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className={`p-6 rounded-2xl border ${getStatusBg(metric.status)} transition-all duration-300`}
          >
            <div className="flex items-start justify-between mb-4">
              {getStatusIcon(metric.status)}
              <span 
                role="status"
                className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {metric.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              {metric.name}
            </h3>

            <div className="space-y-2">
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {metric.value}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Last check: {formatTime(metric.lastCheck)}</span>
              </div>
            </div>

            {metric.status === 'error' && (
              <div className="mt-4 pt-4 border-t border-red-300 dark:border-red-700">
                <p className="text-xs text-red-700 dark:text-red-400 font-medium">
                  Alert: Immediate attention required
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <Activity className="w-12 h-12 mb-4" />
            <h2 className="text-3xl font-bold">System Status</h2>
            <p className="text-blue-100 mt-2 text-lg">
              1 critical • 1 warning • 2 healthy
            </p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold">75%</div>
            <p className="text-blue-200">Overall Health</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}