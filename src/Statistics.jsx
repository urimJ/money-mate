localStorage.setItem('Group1', JSON.stringify(['가','나','다','가','나','라']));
localStorage.setItem('Group2', JSON.stringify(['안','녕','하','안','안','세']));
localStorage.setItem('spend', JSON.stringify(['2000','3000','4000','5000','6000','7000']));
localStorage.setItem('date', JSON.stringify(['2023-06-01', '2023-06-02', '2023-06-03', '2023-06-04', '2023-06-05', '2023-06-06']));
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
import StatisticsDatePickers from './components/Statistics/StatisticsDatePicker';
import ChartTable from './components/Statistics/Table';
import DropdownGroup from './components/Statistics/DropdownGroup';
import DropdownChart from './components/Statistics/DropdownChart';
import PieChart from './components/Statistics/ChartType/Pie';
import LineChart from './components/Statistics/ChartType/Line';
import dayjs from 'dayjs';

const AcountsStatistics = () => {
  const userName = localStorage.getItem('username');

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedChart, setSelectedChart] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showChart, setShowChart] = useState(false);


  const handleStartDateChange = (date) => {
    setStartDate(date);
    const formattedStartDate = date ? dayjs(date).format('YYYY-MM-DD') : null;
    console.log('시작 날짜:', formattedStartDate);
    localStorage.setItem('startDate', formattedStartDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    const formattedEndDate = date ? dayjs(date).format('YYYY-MM-DD') : null;
    console.log('종료 날짜:', formattedEndDate);
    localStorage.setItem('endDate', formattedEndDate);
  };

  const handleGroupSelect = (groupType) => {
    setSelectedGroup(groupType);
    setShowChart(false);
    localStorage.setItem('selectedGroup', groupType);
  };

  const handleChartSelect = (chartType) => {
    setSelectedChart(chartType);
    setShowChart(false);
  };

  const handleChartSearch = () => {
    setShowChart(true);
    console.log('시작 날짜:', startDate);
    console.log('종료 날짜:', endDate);
  };

  return (
    <>
      <Statisticscontainer>
        <StatisticsSection>
          <StatisticsHeader>
            <StatisticsTitle>{userName}님의 가계부</StatisticsTitle>

            <StatisticsGroupBtn>
              <StatisticsGroupFromTo>
                <StatisticsDatePicker>
                  <StatisticsDatePickers
                    className="btnFrom"
                    label={'시작 날짜'}
                    value={startDate}
                    onDateChange={handleStartDateChange}
                  />
                </StatisticsDatePicker>

                <StatisticsSorting>부터</StatisticsSorting>

                <StatisticsDatePicker>
                  <StatisticsDatePickers
                    className="btnFrom"
                    label={'종료 날짜'}
                    value={endDate}
                    onDateChange={handleEndDateChange}
                  />
                </StatisticsDatePicker>

                <StatisticsSorting>까지</StatisticsSorting>
              </StatisticsGroupFromTo>

              <StatisticsGroupChart>
                <StatisticsBtnGroup>
                  <DropdownGroup
                    handleGroupSelect={handleGroupSelect}
                    selectedGroup={selectedGroup}
                  />
                </StatisticsBtnGroup>
                <StatisticsBtnChart>
                  <DropdownChart
                    handleChartSelect={handleChartSelect}
                    selectedChart={selectedChart}
                  />
                </StatisticsBtnChart>
                <StatisticsBtnSearch onClick={handleChartSearch}>
                  차트 보기
                </StatisticsBtnSearch>
              </StatisticsGroupChart>
            </StatisticsGroupBtn>
          </StatisticsHeader>

          <Statisticsbody>
            <Statisticschart>
              {showChart && selectedChart === 'Pie' && selectedGroup && (
                <PieChart selectedGroup={selectedGroup} />
              )}
              {showChart && selectedChart === 'Line' && selectedGroup && (
                <LineChart selectedGroup={selectedGroup} />
              )}
            </Statisticschart>
            <Statisticstable>
              {showChart && selectedGroup === 'Group1' && selectedChart && (
                <ChartTable selectedGroup={selectedGroup} />
              )}
              {showChart && selectedGroup === 'Group2' && selectedChart && (
                <ChartTable selectedGroup={selectedGroup} />
              )}
            </Statisticstable>
          </Statisticsbody>
        </StatisticsSection>
      </Statisticscontainer>
    </>
  );
};

export default AcountsStatistics;
