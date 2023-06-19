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
  StatisticsMessage,
} from './components/StatisticsStyle';
import { useState } from 'react';
import StatisticsDatePickers from './components/Statistics/StatisticsDatePicker';
import ChartTable from './components/Statistics/Table';
import DropdownGroup from './components/Statistics/DropdownGroup';
import DropdownChart from './components/Statistics/DropdownChart';
import PieChart from './components/Statistics/ChartType/Pie';
import LineChart from './components/Statistics/ChartType/Line';
import dayjs from 'dayjs';
import PolarAreaChart from './components/Statistics/ChartType/Area';
import RadarChart from './components/Statistics/ChartType/Radar';
import BarChart from './components/Statistics/ChartType/Bar';

const AcountsStatistics = ({navToggle}) => {
  const userName = localStorage.getItem('username');
  console.log(navToggle);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedChart, setSelectedChart] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
    localStorage.setItem('selectedGroup', groupType);
  };

  const handleChartSelect = (chartType) => {
    setSelectedChart(chartType);
    setShowChart(false);
    setIsVisible(true);
  };

  const handleChartSearch = () => {
    if (startDate && endDate && endDate < startDate) {
      alert('종료 날짜는 시작 날짜 이후여야 합니다.');
      return;
    }
    else if (!startDate&&!endDate) {
      alert('기간을 설정해주세요.');
      return;
    }
    else if (!startDate) {
      alert('시작 날짜를 선택해주세요.');
      return;
    }
    else if (!endDate) {
      alert('종료 날짜를 선택해주세요.');
      return;
    }
    setShowChart(true);
    setIsVisible(false);  
  };

  const handleClick = () => {
    setShowChart(false);
    setIsVisible(true);
  }

  return (
    <>
      <Statisticscontainer>
        <StatisticsSection>
          <StatisticsHeader>
          {navToggle === false && (
    <StatisticsTitle>{userName}님의 가계부</StatisticsTitle>
  )}

            <StatisticsGroupBtn>
              <StatisticsGroupFromTo>
                <StatisticsDatePicker onClick={handleClick}>
                  <StatisticsDatePickers
                    value={startDate}
                    onDateChange={handleStartDateChange}
                  />
                </StatisticsDatePicker>

                <StatisticsSorting>부터</StatisticsSorting>

                <StatisticsDatePicker onClick={handleClick}>
                  <StatisticsDatePickers
                    value={endDate}
                    onDateChange={handleEndDateChange}
                  />
                </StatisticsDatePicker>

                <StatisticsSorting>까지</StatisticsSorting>
              </StatisticsGroupFromTo>

              <StatisticsGroupChart>
                <StatisticsBtnGroup onClick={handleClick}>
                  <DropdownGroup
                    handleGroupSelect={handleGroupSelect}
                    selectedGroup={selectedGroup}
                  />
                </StatisticsBtnGroup>
                <StatisticsBtnChart onClick={handleClick}>
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
          {isVisible&&<StatisticsMessage navToggle={navToggle}>원하시는 날짜, 그룹, 차트를 선택해주세요.</StatisticsMessage>}
            <Statisticschart  navToggle={navToggle}>
              {showChart && selectedChart === 'Pie' && selectedGroup && (
                <PieChart selectedGroup={selectedGroup} />
              )}
              {showChart && selectedChart === 'Line' && selectedGroup && (
                <LineChart selectedGroup={selectedGroup} />
              )}
              {showChart && selectedChart === 'Bar' && selectedGroup && (
                <BarChart selectedGroup={selectedGroup} />
              )}
              {showChart && selectedChart === 'PolarArea' && selectedGroup && (
                <PolarAreaChart selectedGroup={selectedGroup} />
              )}
              {showChart && selectedChart === 'Radar' && selectedGroup && (
                <RadarChart selectedGroup={selectedGroup} />
              )}
            </Statisticschart>
            {navToggle === false &&<Statisticstable>
              {showChart && selectedGroup === 'Group1' && selectedChart && (
                <ChartTable selectedGroup={selectedGroup} />
              )}
              {showChart && selectedGroup === 'Group2' && selectedChart && (
                <ChartTable selectedGroup={selectedGroup} />
              )}
            </Statisticstable>}
          </Statisticsbody>
        </StatisticsSection>
      </Statisticscontainer>
    </>
  );
};

export default AcountsStatistics;
