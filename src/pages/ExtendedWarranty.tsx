import ExtendedWarrantyCard from '../components/ExtendedWarrantyCard';
import { mockWarranties } from '../mocks/mockApi';

export default function ExtendedWarrantyPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Extended Warranty Status</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockWarranties.map((w, i) => (
          <ExtendedWarrantyCard key={i} warranty={w} />
        ))}
      </div>
    </div>
  );
}