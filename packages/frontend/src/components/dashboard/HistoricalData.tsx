import React from 'react';

interface HistoricalDataProps {}

export const HistoricalData: React.FC<HistoricalDataProps> = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Historical Analysis
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            Weekly Comparison
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-green-600">↓ 15%</span>
            <span className="text-gray-500 text-sm">vs last week</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Monthly Average</span>
            <span className="font-medium">24.5 kg</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Recycling Rate</span>
            <span className="font-medium text-green-600">68%</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 