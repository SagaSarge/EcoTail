import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';

interface BinData {
  id: string;
  name: string;
  location: string;
  status: 'Available' | 'Full' | 'Maintenance';
  fillLevel: number;
  lastEmptied: string;
}

const mockBins: BinData[] = [
  {
    id: '1',
    name: 'Bin A-1',
    location: 'Main Street',
    status: 'Available',
    fillLevel: 30,
    lastEmptied: '2024-01-14T08:00:00Z',
  },
  {
    id: '2',
    name: 'Bin B-2',
    location: 'Central Park',
    status: 'Full',
    fillLevel: 90,
    lastEmptied: '2024-01-13T15:30:00Z',
  },
  {
    id: '3',
    name: 'Bin C-3',
    location: 'Market Square',
    status: 'Maintenance',
    fillLevel: 0,
    lastEmptied: '2024-01-12T12:45:00Z',
  },
];

function getBinStatusVariant(status: BinData['status']): 'success' | 'warning' | 'error' {
  switch (status) {
    case 'Available':
      return 'success';
    case 'Full':
      return 'warning';
    case 'Maintenance':
      return 'error';
    default:
      return 'error';
  }
}

export function SmartBins() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Bins</h1>
        <button className="rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700">
          Add New Bin
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockBins.map((bin) => (
          <Card key={bin.id} title={bin.name}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Status</span>
                <Badge variant={getBinStatusVariant(bin.status)}>{bin.status}</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Fill Level</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {bin.fillLevel}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-2 rounded-full bg-primary-600"
                    style={{ width: `${bin.fillLevel}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Location</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {bin.location}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Last Emptied</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {new Date(bin.lastEmptied).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 