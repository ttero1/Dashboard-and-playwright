// src/pages/ExtendedWarrantyPage.tsx
import { motion } from 'framer-motion';
import { Calendar, Shield, AlertCircle, CheckCircle2 } from 'lucide-react';
import { mockWarranties } from '../mocks/mockApi';

// Fixed function — was missing arrow and proper syntax
const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

function getStatusBadge(status: 'active' | 'expiring_soon' | 'expired') {
  const styles = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    expiring_soon: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    expired: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };

  const icons = {
    active: <CheckCircle2 className="w-4 h-4" />,
    expiring_soon: <AlertCircle className="w-4 h-4" />,
    expired: <AlertCircle className="w-4 h-4" />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
      {icons[status]}
      {status.replace('_', ' ').charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
    </span>
  );
}

export default function ExtendedWarrantyPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Extended Warranty Status
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Track coverage and renewal dates for all your devices
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWarranties.map((warranty, index) => (
          <motion.div
            key={warranty.product}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <Shield className={`w-10 h-10 ${warranty.extended ? 'text-blue-500' : 'text-gray-400'}`} />
                {getStatusBadge(warranty.status)}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {warranty.product}
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Purchased: {formatDate(warranty.purchaseDate)}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Base Ends: {formatDate(warranty.warrantyEndDate)}</span>
                </div>
                {warranty.extended && warranty.extendedUntil && (
                  <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-medium">
                    <Shield className="w-4 h-4" />
                    <span>Extended Until: {formatDate(warranty.extendedUntil)}</span>
                  </div>
                )}
              </div>

              {warranty.status === 'expiring_soon' && (
                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-300 font-medium">
                    Warning: Warranty expires soon! Renew now?
                  </p>
                </div>
              )}

              {warranty.status === 'expired' && (
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-sm text-red-800 dark:text-red-300 font-medium">
                    Expired: This device is no longer under warranty
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}