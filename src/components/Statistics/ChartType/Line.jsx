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
  import { Line } from 'react-chartjs-2';
  import { Chartdata1, options1 } from '../Group1data';
  import { Chartdata2, options2 } from '../Group2data';
  
  
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
  
  export default function LineChart({ selectedGroup }) {
    const Chartdata = selectedGroup === 'Group1' ? Chartdata1 : selectedGroup === 'Group2' ? Chartdata2 : null;
    const Chartoptions = selectedGroup === 'Group1' ? options1 : selectedGroup === 'Group2' ? options2 : null;
  
    return (
      <>
        {Chartdata && Chartoptions && <Line data={Chartdata} options={Chartoptions} />}
      </>
    );
  }