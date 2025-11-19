export interface Warranty {
  product: string;
  purchaseDate: string;
  warrantyEndDate: string;
  extended: boolean;
  extendedUntil?: string;
  status: 'active' | 'expiring_soon' | 'expired';
}

export interface HealthMetric {
  name: string;
  status: 'healthy' | 'warning' | 'error';
  value: string;
  lastCheck: string;
}

export const mockWarranties: Warranty[] = [
  {
    product: "MacBook Pro 16″ M2 Max",
    purchaseDate: "2024-01-15",
    warrantyEndDate: "2026-01-15",
    extended: true,
    extendedUntil: "2028-01-15",
    status: "active"
  },
  {
    product: "iPhone 15 Pro",
    purchaseDate: "2023-11-20",
    warrantyEndDate: "2024-12-20",
    extended: false,
    status: "expired"
  },
];

export const mockHealth: HealthMetric[] = [
  { name: "API Gateway", status: "healthy", value: "200 OK", lastCheck: new Date().toISOString() },
  { name: "Database Cluster", status: "healthy", value: "99.99% uptime", lastCheck: new Date().toISOString() },
  { name: "Cache Layer", status: "warning", value: "Hit ratio 68%", lastCheck: new Date().toISOString() },
  { name: "Payment Processor", status: "error", value: "Timeout", lastCheck: new Date().toISOString() },
];