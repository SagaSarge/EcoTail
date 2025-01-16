import React from 'react';

interface GoalTrackingProps {}

export const GoalTracking: React.FC<GoalTrackingProps> = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Goal Tracking
      </h2>
      
      <div className="space-y-4">
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              Monthly Recycling Goal
            </span>
            <span className="text-sm font-medium text-green-600">75%</span>
          </div>
          <div className="overflow-hidden h-2 mt-2 bg-gray-200 rounded">
            <div 
              className="bg-green-500 h-full rounded" 
              style={{ width: '75%' }}
            />
          </div>
        </div>

        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              Waste Reduction
            </span>
            <span className="text-sm font-medium text-blue-600">60%</span>
          </div>
          <div className="overflow-hidden h-2 mt-2 bg-gray-200 rounded">
            <div 
              className="bg-blue-500 h-full rounded" 
              style={{ width: '60%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 