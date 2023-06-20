import {
  RadialLinearScale,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { useLocalData, sumSpendByLabel } from '../DataManagement';
import { Chartdata } from '../ChartConfig';

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

export default function PolarAreaChart() {
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
        color: theme ? 'white' : 'black',
        bodyFont: {
          family: 'GmarketSansTTFLight',
        },
      },
    },
    scales: {
      r: {
        ticks: {
          display:!theme,
          color: theme ? 'white' : 'black',
          font: {
            family: "GmarketSansTTFLight",
          }
        },
        pointLabels: {
          display: true,
          centerPointLabels: true,
          color: theme ? 'white' : 'black',
          font: {
            family: 'GmarketSansTTFLight',
          }
        }
      }
    },

    }

  return (
    <>
      <PolarArea data={data} options={options} />
    </>
  );
}
