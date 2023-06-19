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

export const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          family: "GmarketSansTTFLight",
        }
      }
    },
    tooltip: {
      bodyFont: {
        family: "GmarketSansTTFLight",
      }
    }
  },
  
  scale: {
    ticks: {
      font: {
        family: "GmarketSansTTFLight",
      }
    },
  },
};

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

  return (
    <>
      <PolarArea data={data} options={options} />
    </>
  );
}
