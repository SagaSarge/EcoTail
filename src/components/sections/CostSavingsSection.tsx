import React from 'react';
import { useNavigate } from 'react-router-dom';

const recyclingItems = [
  {
    id: '1',
    name: 'Dr Pepper Can',
    type: 'Aluminum',
    points: 15,
    progress: 75,
    co2Reduction: '0.5 kg saved',
    waterSaved: '2L saved',
  },
  {
    id: '2',
    name: 'Doritos Bag',
    type: 'Plastic',
    points: 12,
    progress: 60,
    co2Reduction: '0.3 kg saved',
    waterSaved: '1.5L saved',
  },
  {
    id: '3',
    name: 'Amazon Box',
    type: 'Cardboard',
    points: 18,
    progress: 90,
    co2Reduction: '0.8 kg saved',
    waterSaved: '3L saved',
  },
];

export const CostSavingsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Your Recycling Impact Today
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Track your daily recycling activity and environmental impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recyclingItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-500">{item.type}</p>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{`+${item.points} pts`}</span>
                  <span className="text-gray-600">{`Recycling Progress: ${item.progress}%`}</span>
                </div>
                <div className="mt-2">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-gray-600">
                <p>{`CO₂ Reduction: ${item.co2Reduction}`}</p>
                <p>{`Water Saved: ${item.waterSaved}`}</p>
              </div>
              <button
                onClick={() => navigate(`/details/${item.id}`)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 