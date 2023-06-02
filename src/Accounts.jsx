import {
  AccountsBtnInput,
  AccountsBtnSearch,
  AccountsContHeader,
  AccountsContainer,
  AccountsGroupFromTo,
  AccountsSorting,
  AccountsTitle,
  AccountsContBody,
  AccountsTable,
  AccountsAmountColorIncome,
  AccountsAmountColorSpending,
  SideNavBar,
  NavItem1,
  NavItem2,
  NavItem3,
  SideNavBarButton,
  NavHeader,
  FirstNavigator,
  SecondNavigator,
  ThirdNavigator,
  NavNewsSection,
  NavNewsHeader,
  AccountsSection,
  AccountsTableHeadTh,
} from './components/AccountsStyle';
import DatePicker from './components/Accounts/DatePickers';
import FormDialog from './components/Accounts/FormDialog';

import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NewsList from './components/Accounts/NewsList';

const Accounts = () => {
  // 변수 관리-------------------------------------
  const navigate = useNavigate();

  // News API-------------------------------------
  const API_KEY = '06288e3f326849a5a788730118439d3c';
  // API_KEY 임시 처리, 나중에 숨길 것
  const [newsData, setNewsData] = useState([]);
  const fetchData = async () => {
    try {
      const apiData = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      );
      setNewsData(apiData.data.articles);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const newsList = newsData?.map((news, idx) => {
    return (
      <React.Fragment key={idx}>
        <NewsList newsData={newsData} id={idx} />
      </React.Fragment>
    );
  });

  // Navigation 관리--------------------------------
  const [navToggle, setNavToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const handleNavButton = () => setNavToggle(!navToggle);
  const handleNavigator0 = useCallback(() => setCurrentPage(0), [currentPage]);
  const handleNavigator1 = useCallback(() => setCurrentPage(1), [currentPage]);
  const handleNavigator2 = useCallback(() => setCurrentPage(2), [currentPage]);
  const handleNavToHome = () => navigate('/guide');

  // const [list, setList] = useState()
  // const group = [];
  // const lists = [
  //   {date: "", content:"", amount: "", group :"" },
  //   {},
  // ];
  console.log(newsData);
  return (
    <>
      <AccountsContainer>
        {/* Navigation Bar----------------------------------- */}
        <SideNavBarButton onClick={handleNavButton} navToggle={navToggle}>
          <NavItem1>{navToggle ? '' : `>`} </NavItem1>
          <NavItem2>{navToggle ? '' : `>`}</NavItem2>
          <NavItem3>{navToggle ? 'X' : `>`}</NavItem3>
        </SideNavBarButton>
        <SideNavBar navToggle={navToggle}>
          <NavHeader onClick={handleNavToHome}>Money-mate</NavHeader>
          <FirstNavigator currentPage={currentPage} onClick={handleNavigator0}>
            가계부
          </FirstNavigator>
          <SecondNavigator currentPage={currentPage} onClick={handleNavigator1}>
            달력
          </SecondNavigator>
          <ThirdNavigator currentPage={currentPage} onClick={handleNavigator2}>
            차트
          </ThirdNavigator>
          <NavNewsHeader>WORLDWIDE HOT NEWS</NavNewsHeader>
          <NavNewsSection>{newsList}</NavNewsSection>
        </SideNavBar>
        <AccountsSection navToggle={navToggle}>
          {currentPage === 0
            ? '가계부 페이지'
            : currentPage === 1
            ? '달력 페이지'
            : currentPage === 2
            ? '차트 페이지'
            : ''}
        </AccountsSection>
        {/* <AccountsContHeader className="contHeader">
          <AccountsTitle className="title">{userName}님의 가계부</AccountsTitle>
          <AccountsGroupFromTo className="groupFromTo">
            <DatePicker
              className="btnFrom"
              label={'시작 날짜'}
              // value={startDate}
              // onChange={(value)=>{
              //   setStartDate(value)
              //   console.log(userName, value);}}
            />
            <AccountsSorting>부터</AccountsSorting>
            <DatePicker
              className="btnTo"
              label={'종료 날짜'}
              // value={endDate}
              // onChange={(newValue) => {
              //   setEndDate(newValue);
              // }}
            />
            <AccountsSorting className="sorting">까지</AccountsSorting>
            <AccountsBtnSearch className="btnSearch">보기</AccountsBtnSearch>
            <FormDialog />
          </AccountsGroupFromTo>
        </AccountsContHeader>
        <AccountsContBody className="contBody">
          <AccountsTable className="tableWidth">
            <thead>
              <tr>
                <AccountsTableHeadTh className="widthFixed">
                  날짜
                </AccountsTableHeadTh>
                <AccountsTableHeadTh>내용</AccountsTableHeadTh>
                <AccountsTableHeadTh>금액</AccountsTableHeadTh>
                <AccountsTableHeadTh>그룹A</AccountsTableHeadTh>
                <AccountsTableHeadTh>그룹B</AccountsTableHeadTh>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="widthFixed">2023-05-17</td>
                <td>박수련장인 베개</td>
                <AccountsAmountColorSpending className="colorAmount income">
                  50,000
                </AccountsAmountColorSpending>
                <td>생활용품</td>
                <td>카카오뱅크카드</td>
              </tr>
            </tbody>
          </AccountsTable>
        </AccountsContBody> */}
      </AccountsContainer>
    </>
  );
};

export default Accounts;
