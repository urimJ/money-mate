import styled from 'styled-components';
import { bgColor, primaryColor } from '../../../GlobalStyle.jsx';
import { Chartdata } from './ChartConfig.jsx';
import { useLocalData, sumSpendByLabel } from './DataManagement.jsx';

const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border: 1px ${(props) => props.theme.StatisticButtonColor};
  border-collapse: collapse;

  thead {
    background-color: ${primaryColor};
    color: ${(props) => props.theme.textrColor};
  }

  th, td {
    border: 1px solid ${(props) => props.theme.textColor};
    padding: 10px;
  }

  td {
    border: 1px solid ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.textColor};
  }
`;

function ChartTable(selectedGroup) {
  const localData = useLocalData(selectedGroup);
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
    <StyledTable>
      <thead>
        <tr>
          <th>카테고리</th>
          <th>소비금액</th>
        </tr>
      </thead>
      <tbody>
        {data.labels.map((label, index) => (
          <tr key={label}>
            <td>{label}</td>
            <td>{data.datasets[0].data[index] || 0}원</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default ChartTable;
