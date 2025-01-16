import React from 'react';

interface WasteMetricsProps {}

export const WasteMetrics: React.FC<WasteMetricsProps> = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Real-time Waste Metrics
      </h2>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Recyclables</span>
          <span className="font-medium text-green-600">45%</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Compostables</span>
          <span className="font-medium text-yellow-600">30%</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">General Waste</span>
          <span className="font-medium text-red-600">25%</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Container Capacity</span>
          <span className="font-medium text-blue-600">75%</span>
        </div>
      </div>
    </div>
  );
}; 