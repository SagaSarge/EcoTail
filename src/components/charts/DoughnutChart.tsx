import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface DoughnutChartProps {
  data: any; // Replace with proper type from your data store
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  const chartData = {
    labels: ['Organic', 'Plastic', 'Paper', 'Glass', 'Metal'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          '#2A9D8F', // Sage green
          '#E9C46A', // Warm sand
          '#F4A261', // Terracotta
          '#8AB17D', // Leaf green
          '#264653', // Deep slate
        ],
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#E9EDC9',
          padding: 20,
          font: {
            size: 12,
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: '#264653',
        titleColor: '#E9EDC9',
        bodyColor: '#FFFFFF',
        borderColor: '#8AB17D',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          }
        }
      },
    },
    cutout: '65%',
    rotation: -90,
    circumference: 360,
  };

  return <Doughnut data={chartData} options={options} />;
}; 