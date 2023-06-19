import styled from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

export const Statisticscontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${(props) => props.theme.bgColor};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StatisticsSection = styled.div`
  width: 100%;
`;

export const StatisticsHeader = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 20px;
  }
`;

export const StatisticsTitle = styled.p`
  /* font-family: 'Nanum Gothic', sans-serif; */
  font-size: 4vh;
  font-weight: bold;
  color: ${(props) => props.theme.primaryColor};
  position: relative;
  margin: 7% 0 0 15%;
  white-space: nowrap;
  font-family: 'GmarketSansTTFLight';

  @media (max-width: 1100px) {
    display: none;
  }

  @media (max-width: 900px) {
    margin: 0;
    font-size: 3vh;
    text-align: center;
  }
`;

export const StatisticsGroupBtn = styled.div`
  display: block;
  position: relative;
  margin: 7% 15% 0 10%;

  @media (max-width: 900px) {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StatisticsGroupFromTo = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StatisticsGroupChart = styled.div`
  display: flex;
  position: relative;
  margin-top: 15px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const StatisticsDatePicker = styled.div`
  width: 200px;

  @media (max-width: 900px) {
    margin-bottom: 10px;
  }
`;

export const StatisticsSorting = styled.p`
  padding: 20px 30px 0px 10px;
  font-size: 18px;
  color: ${(props) => props.theme.textColor};

  @media (max-width: 900px) {
    padding: 0;
    margin: 5px;
  }
`;

export const StatisticsBtnGroup = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  font-size: 16px;

  @media (max-width: 900px) {
    margin-bottom: 10px;
    margin-left: 55px;
  }
`;

export const StatisticsBtnChart = styled.div`
  margin-left: 75px;
  background-color: ${(props) => props.theme.bgColor};
  font-size: 16px;

  @media (max-width: 900px) {
    margin-bottom: 10px;
    margin-left: 50px;
    margin-right: 100px;
  }
`;

export const StatisticsBtnSearch = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textrColor};
  font-size: 16px;
  font-family: 'GmarketSansTTFLight';
  width: 90px;
  height: 45px;
  border-radius: 5px;
  margin-left: 30px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Statisticsbody = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: flex-end;
  text-align: center;
  

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StatisticsMessage = styled.div`
  font-size: 20px;
  width: 100%;
  white-space: nowrap;
  margin: ${props => props.navToggle ? '150px 0 0 250px' : '150px 0 0 500px'};
  color: ${(props) => props.theme.textColor};
  @media (max-width: 900px) {
    margin: 50px;
  }
`;

export const Statisticschart = styled.div`
  width: 400px;
  height: 350px;
  margin: ${props => props.navToggle ? '60px 20vw 0 5%' : '60px 5vw 0 5%'};

  @media (max-width: 900px) {
    margin: 50px 0 120px 0;
    width: 80%;
  }
`;

export const Statisticstable = styled.div`
  width: 400px;
  height: 80px;
  text-align: center;
  margin: 90px 20vw 0 0;

  @media (max-width: 900px) {
    display: none;
  }
`;
