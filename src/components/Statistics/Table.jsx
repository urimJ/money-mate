import { bgColor, primaryColor } from "../../../GlobalStyle.jsx";
import { Chartdata1 } from "./Group1data.jsx";
import { Chartdata2 } from "./Group2data.jsx";

function ChartTable({ selectedGroup }) {
  const Chartdata = selectedGroup === 'Group1' ? Chartdata1 : selectedGroup === 'Group2' ? Chartdata2 : null;

  return (
    <table style={{ width: '100%', height: '100%', border: '1px solid gray', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: primaryColor, color: bgColor }}>
        <tr>
          <th style={{ border: '1px solid black', padding: '10px' }}>카테고리</th>
          <th style={{ border: '1px solid black', padding: '10px' }}>소비금액</th>
        </tr>
      </thead>
      <tbody>
        {Chartdata && Chartdata.labels.map((label, index) => (
          <tr key={label}>
            <td style={{ border: '1px solid gray', padding: '10px' }}>{label}</td>
            <td style={{ border: '1px solid gray', padding: '10px' }}>{Chartdata.datasets[0].data[index] || 0}원</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ChartTable;
