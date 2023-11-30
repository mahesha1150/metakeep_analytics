// BarChart.js
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {

  const auditData = {
    labels: ['Unique Users', 'API Calls', 'Failures'],
    datasets: [
      {
        label: 'Metrics',
        data: [chartData.noOfUniqueUsers, chartData.noOfAPICalls, chartData.noOfFailures],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)', // Unique Users
          'rgba(75, 192, 192, 0.2)', // API Calls
          'rgba(255, 99, 132, 0.2)', // Failures
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],

  };

  /* const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }; */

  return <Bar data={auditData} /* options={chartOptions} */ />;
};

export default BarChart;
