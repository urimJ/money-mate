import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useLocalData, sumSpendByLabel } from '../DataManagement';
import { Chartdata } from '../ChartConfig';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend);

export default function LineChart() {
  const localData = useLocalData();
  const ReduceLabels = [...new Set(localData.Group)];
  const startDate = localStorage.getItem('startDate');
  const endDate = localStorage.getItem('endDate');
  const SpendData = ReduceLabels.map(
    (label) => sumSpendByLabel(startDate, endDate, localData)[label]
  );
  const labels = ReduceLabels;
  const spendData = SpendData;
  const data = Chartdata(labels, spendData);

  const theme = localStorage.getItem('theme') === 'true';

  const options = {
    responsive: true,
    scales: {
      y: {
        offset: true,
        beginAtZero: true,
        min: 0,
        ticks: {
          color: theme ? 'white' : 'black',
          font: {
            family: 'GmarketSansTTFLight',
          },
        },
      },
      x: {
        offset: true,
        ticks: {
          color: theme ? 'white' : 'black',
          font: {
            family: 'GmarketSansTTFLight',
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: theme ? 'white' : 'black',
          font: {
            family: 'GmarketSansTTFLight',
          },
        },
      },
      tooltip: {
        bodyFont: {
          family: 'GmarketSansTTFLight',
        },
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}
