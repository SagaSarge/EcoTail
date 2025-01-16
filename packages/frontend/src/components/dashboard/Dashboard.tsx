import React from 'react';
import { WasteMetrics } from './WasteMetrics';
import { HistoricalData } from './HistoricalData';
import { GoalTracking } from './GoalTracking';
import { Achievements } from './Achievements';

interface DashboardProps {
  userId: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userId }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Waste Management Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Real-time Metrics Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <WasteMetrics />
          </div>

          {/* Historical Data Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <HistoricalData />
          </div>

          {/* Goal Tracking Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <GoalTracking />
          </div>

          {/* Achievements Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 