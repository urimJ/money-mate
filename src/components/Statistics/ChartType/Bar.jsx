import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { useLocalData,sumSpendByLabel } from '../DataManagement';
  import { Chartdata } from '../ChartConfig';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,

  scales: {
    y: {
      offset: true,
      beginAtZero: true,
      min: 0,
      ticks: {
        font: {
          family: "GmarketSansTTFLight",
        }
      }
    },
    x: {
      offset: true,
      ticks: {
        font: {
          family: "GmarketSansTTFLight",
        }
      }
    }
  },

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
  }
  };
  
  export default function BarChart() {
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
        <Bar data={data} options={options}/>
      </>
    );
  }
  