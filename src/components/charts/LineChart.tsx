import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  data: any; // Replace with proper type from your data store
}

export const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Waste Reduction',
        data: [10, 15, 8, 20, 18, 25],
        fill: true,
        borderColor: '#E9C46A',
        backgroundColor: 'rgba(233, 196, 106, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#F4A261',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#264653',
        titleColor: '#E9EDC9',
        bodyColor: '#FFFFFF',
        borderColor: '#8AB17D',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#E9EDC9',
        },
      },
      y: {
        grid: {
          color: 'rgba(138, 177, 125, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#E9EDC9',
          padding: 10,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}; 