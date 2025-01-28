import React from 'react';
import { Skeleton } from '../../common/Skeleton';
import { Card } from '../ui/Card';

export const DashboardSkeleton: React.FC = () => {
  return (
    <div className="space-y-6 p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <Skeleton variant="text" width={150} height={32} />
        <Skeleton variant="circular" width={40} height={40} />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="p-4 space-y-3">
            <Skeleton variant="text" width={80} />
            <Skeleton variant="rectangular" height={40} />
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-4 space-y-4">
        <Skeleton variant="text" width={120} />
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Skeleton variant="circular" width={32} height={32} />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="40%" />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        {[...Array(2)].map((_, i) => (
          <Card key={i} className="p-4">
            <Skeleton variant="rectangular" height={80} />
          </Card>
        ))}
      </div>
    </div>
  );
}; 