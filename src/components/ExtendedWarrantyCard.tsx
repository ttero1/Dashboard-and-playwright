import { format, isAfter, isBefore, addDays } from 'date-fns';
import type { Warranty } from '../mocks/mockApi';

interface Props {
  warranty: Warranty;
}

export default function ExtendedWarrantyCard({ warranty }: Props) {
  const today = new Date();
  const endDate = new Date(warranty.warrantyEndDate);
  const extendedEnd = warranty.extendedUntil ? new Date(warranty.extendedUntil) : null;
  const daysLeft = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg">{warranty.product}</h3>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Purchase date</span>
          <span>{format(new Date(warranty.purchaseDate), 'dd MMM yyyy')}</span>
        </div>
        <div className="flex justify-between">
          <span>Standard warranty ends</span>
          <span className={daysLeft < 60 ? 'text-red-600 font-medium' : ''}>
            {format(endDate, 'dd MMM yyyy')} ({daysLeft} days)
          </span>
        </div>
        {warranty.extended && extendedEnd && (
          <div className="flex justify-between text-green-600 font-medium">
            <span>Extended until</span>
            <span>{format(extendedEnd, 'dd MMM yyyy')}</span>
          </div>
        )}
        <div className="mt-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            warranty.status === 'active' ? 'bg-green-100 text-green-800' :
            warranty.status === 'expiring_soon' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {warranty.status.replace('_', ' ').toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}