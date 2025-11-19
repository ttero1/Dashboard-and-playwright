import SiteHealthDashboard from '../components/SiteHealthDashboard';
import { mockHealth } from '../mocks/mockApi';

export default function SiteHealthPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Site Health Monitoring</h1>
      <SiteHealthDashboard metrics={mockHealth} />
    </div>
  );
}