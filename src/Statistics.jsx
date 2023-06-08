import {
  Statisticschart,
  Statisticsbody,
  Statisticstable,
  Statisticscontainer,
  StatisticsBtnSearch,
  StatisticsHeader,
  StatisticsGroupFromTo,
  StatisticsSorting,
  StatisticsTitle,
  StatisticsSection,
  StatisticsBtnGroup,
  StatisticsBtnChart,
  StatisticsGroupBtn,
  StatisticsGroupChart,
  StatisticsDatePicker,
} from './components/StatisticsStyle';
import { useState } from 'react';
import DatePicker from './components/Accounts/DatePickers';
import ChartTable from './components/Statistics/Table';
import DropdownGroup from './components/Statistics/DropdownGroup';
import DropdownChart from './components/Statistics/DropdownChart';
import PieChart from './components/Statistics/ChartType/Pie';
import LineChart from './components/Statistics/ChartType/Line';


const Statistics = () => {
  const userName = localStorage.getItem('username');

  // const [count, setCount] = useState(0);
  //datepicker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState();

  const [selectedChart, setSelectedChart] = useState(null);
  const [showChart, setShowChart] = useState(false);

  const handleChartSelect = (chartType) => {
    setSelectedChart(chartType);
    setShowChart(false);
  };

  const handleChartSearch = () => {
    setShowChart(true);
    console.log('startDate:', startDate);
    console.log('endDate:', endDate);
  };

  //list
  // const [date, setDate] = useState();
  // const [content, setContent] = useState('');
  // const [amount, setAmount] = useState();
  // const [g, setG] = useState('');

  // const [list, setList] = useState();
  // const group = [];
  // const lists = [{ date: '', content: '', amount: '', group: '' }, {}];
  // console.log(startDate);

  return (
    <>
      {/* 차트 컨테이너 */}
      <Statisticscontainer>
        <StatisticsSection>
          {/* 차트 헤더 */}
          <StatisticsHeader>
            {/* 사용자 타이틀 */}
            <StatisticsTitle>{userName}님의 가계부</StatisticsTitle>

            <StatisticsGroupBtn>
              <StatisticsGroupFromTo>
                <StatisticsDatePicker>
                  <DatePicker
                    className="btnFrom"
                    label={'시작 날짜'}
                    value={startDate}
                    onChange={(value) => {
                      setStartDate(value);
                    }}
                  />
                </StatisticsDatePicker>

                <StatisticsSorting>부터</StatisticsSorting>

                <StatisticsDatePicker>
                  <DatePicker
                    className="btnTo"
                    label={'종료 날짜'}
                    value={endDate}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                  />
                </StatisticsDatePicker>

                <StatisticsSorting>까지</StatisticsSorting>
              </StatisticsGroupFromTo>

              <StatisticsGroupChart>
                <StatisticsBtnGroup>
                  <DropdownGroup></DropdownGroup>
                </StatisticsBtnGroup>
                <StatisticsBtnChart>
                <DropdownChart handleChartSelect={handleChartSelect} selectedChart={selectedChart} />
                </StatisticsBtnChart>
                <StatisticsBtnSearch onClick={handleChartSearch}>차트 보기</StatisticsBtnSearch>
              </StatisticsGroupChart>
            </StatisticsGroupBtn>
          </StatisticsHeader>

          {/* 차트 바디 */}
          <Statisticsbody>
            {/* 차트 */}
            <Statisticschart>
              {showChart && selectedChart === 'Pie' && <PieChart />}
              {showChart && selectedChart === 'Line' && <LineChart />}
            </Statisticschart>
            {/* 테이블 */}
            <Statisticstable>
              {showChart === true && <ChartTable />}
            </Statisticstable>
          </Statisticsbody>
        </StatisticsSection>
      </Statisticscontainer>
    </>
  );
};

export default Statistics;
