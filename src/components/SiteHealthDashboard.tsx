import { formatDistanceToNow } from 'date-fns';
import type { HealthMetric } from '../mocks/mockApi';

interface Props {
  metrics: HealthMetric[];
}

export default function SiteHealthDashboard({ metrics }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <div key={m.name} className="border rounded-lg p-5">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{m.name}</h4>
            <span className={`w-3 h-3 rounded-full ${
              m.status === 'healthy' ? 'bg-green-500' :
              m.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
          </div>
          <p className="text-2xl font-bold mt-2">{m.value}</p>
          <p className="text-xs text-gray-500 mt-2">
            {formatDistanceToNow(new Date(m.lastCheck), { addSuffix: true })}
          </p>
        </div>
      ))}
    </div>
  );
}