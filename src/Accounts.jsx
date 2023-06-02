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

import { useState } from 'react'
import { useCallback} from 'react';

 const Accounts = () => {
  // State 관리-------------------------------------
  const userName = localStorage.getItem('username');

  // Navigation 관리--------------------------------
  const [navToggle, setNavToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const handleNavButton = () => setNavToggle(!navToggle);
  const handleNavigator0 = useCallback(() => setCurrentPage(0), [currentPage]);
  const handleNavigator1 = () => setCurrentPage(1);
  const handleNavigator2 = () => setCurrentPage(2);


  const [list, setList] = useState()
  const group = [];
  const lists = [
    {date: "", content:"", amount: "", group :"" },
    {},
  ];
  

  //
  // const [count, setCount] = useState(0);
  // //datepicker
  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();


  // //list
  // const [date, setDate] = useState();
  // const [content, setContent] = useState('');
  // const [amount, setAmount] = useState();
  // const [g, setG] = useState('');

  // const [list, setList] = useState();
  // const group = [];
  // const lists = [{ date: '', content: '', amount: '', group: '' }, {}];

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
          <NavHeader>Money-mate</NavHeader>
          <FirstNavigator currentPage={currentPage} onClick={handleNavigator0}>
            가계부
          </FirstNavigator>
          <SecondNavigator currentPage={currentPage} onClick={handleNavigator1}>
            달력
          </SecondNavigator>
          <ThirdNavigator currentPage={currentPage} onClick={handleNavigator2}>
            차트
          </ThirdNavigator>
          <NavNewsHeader>경제 뉴스</NavNewsHeader>
          <NavNewsSection>뉴스 API</NavNewsSection>
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
         <AccountsContHeader className="contHeader">
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
            <AccountsSorting >부터</AccountsSorting>
            <DatePicker
              className="btnTo"
              label={'종료 날짜'}
              // value={endDate}
              // onChange={(newValue) => {
              //   setEndDate(newValue);
              // }}
            />
            <AccountsSorting className = "sorting">까지</AccountsSorting>
            <AccountsBtnSearch className = "btnSearch">보기</AccountsBtnSearch>
            <FormDialog />
          </AccountsGroupFromTo>
        </AccountsContHeader>
        <AccountsContBody className = "contBody">
          <AccountsTable className = "tableWidth">
              <thead>
                  <tr>
                      <AccountsTableHeadTh className = "widthFixed">날짜</AccountsTableHeadTh>
                      <AccountsTableHeadTh>내용</AccountsTableHeadTh>
                      <AccountsTableHeadTh>금액</AccountsTableHeadTh>
                      <AccountsTableHeadTh>그룹A</AccountsTableHeadTh>
                      <AccountsTableHeadTh>그룹B</AccountsTableHeadTh>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className = "widthFixed">2023-05-17</td>
                      <td>박수련장인 베개</td>
                      <AccountsAmountColorSpending className = "colorAmount income">50,000</AccountsAmountColorSpending>
                      <td>생활용품</td>
                      <td>카카오뱅크카드</td>
                  </tr>
              </tbody>
          </AccountsTable>
        </AccountsContBody>
      </AccountsContainer>
    </>
  );
};

export default Accounts;
