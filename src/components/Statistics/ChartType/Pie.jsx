import {
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
import { Pie } from 'react-chartjs-2';
import { Chartdata1 } from '../Group1data';
import { Chartdata2 } from '../Group2data';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);


export default function PieChart({ selectedGroup }) {
  const Chartdata = selectedGroup === 'Group1' ? Chartdata1 : selectedGroup === 'Group2' ? Chartdata2 : null;

  return (
    <>
      {Chartdata && <Pie data={Chartdata} />}
    </>
  );
}