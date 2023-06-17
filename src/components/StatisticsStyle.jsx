// Statistics 페이지와 관련된 styled component
import styled from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';
// 컨테이너
export const Statisticscontainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: ${bgColor};
`;


export const StatisticsSection = styled.div`
    width: 100%;
`;

// 헤더
export const StatisticsHeader = styled.div`
  width: 100%;
  height: 30%;
  display:flex;
  justify-content: space-between;

`;

export const StatisticsTitle = styled.p`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: ${primaryColor};
  position: relative;
  top: 80px;
  left: 150px;
  
  
`;

export const StatisticsGroupBtn = styled.div`
  display: block;
  position: relative;
  right: 150px;
  top: 80px;
`;

export const StatisticsGroupFromTo = styled.div`
  display: flex;
  position: relative;
`;

export const StatisticsGroupChart = styled.div`
  display: flex;
  position: relative;
  margin-top: 15px;
`;

export const StatisticsDatePicker = styled.div`
  width: 200px;
`

export const StatisticsSorting = styled.p`
  padding: 20px 30px 0px 10px;
  font-size: 18px;
`;

export const StatisticsBtnGroup = styled.div`
  background-color: ${bgColor};
  font-size: 16px;
`



export const StatisticsBtnChart = styled.div`
  margin-left: 75px;
  background-color: ${bgColor};
  font-size: 16px;
`

export const StatisticsBtnSearch = styled.button`
  background-color: rgb(65,120,203);
  color: white;
  font-size: 16px;
  width: 80px;
  height: 45px;
  border-radius: 5px;
  margin-left: 30px;
`;

export const StatisticsAmountColorSpending = styled.td`
  color: rgb(248,77,77);
`;
export const StatisticsAmountColorIncome = styled.td`
  color: rgb(45,103,251);
`;






export const Statisticsbody = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
`;



export const Statisticschart = styled.div`
    margin: 60px 0 0 300px;
    width: 400px;
    height: 350px;
`;

export const Statisticstable = styled.div`
    width: 350px;
    height: 80px;
    text-align: center;
    margin: 90px 0 0 80px;
`;