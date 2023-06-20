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
import { Radar } from 'react-chartjs-2';
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


export default function RadarChart() {
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
      r: {
        offset: true,
        beginAtZero: true,
        min: 0,
        ticks: {
          display:!theme,
          color: theme ? 'white' : 'black',
          font: {
            family: "GmarketSansTTFLight",
          }
        },
        pointLabels: {
          color: theme ? 'white' : 'black',
          font: {
            family: "GmarketSansTTFLight",
          }
      }
      },
      
    },
    plugins: {
      legend: {
        labels: {
          color: theme ? 'white' : 'black',
          font: {
            family: "GmarketSansTTFLight",
          }
        }
      },
      tooltip: {
        color: theme ? 'white' : 'black',
        bodyFont: {
          family: "GmarketSansTTFLight",
        }
      },
    },
  };

  return (
    <>
      <Radar data={data} options={options} />
    </>
  );
}
