import {
  AccountsBtnInput,
  AccountsBtnSearch,
  AccountsContHeader,
  AccountsContainer,
  AccountsGroupFromTo,
  AccountsGroupInput,
  AccountsSorting,
  AccountsTitle,
  AccountsContBody,
  AccountsTable,
  AccountsTableWidthFixed,
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
} from './components/AccountsStyle';
import { useCallback, useState } from 'react';
import DatePicker from './components/Accounts/DatePickers';
import FormDialog from './components/Accounts/FormDialog';

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
        </SideNavBar>
        {/* 콘솔창 불타서 일단 임시 주석처리 */}
        {/* <AccountsContHeader className="contHeader">
          <AccountsTitle className="title">{userName}님의 가계부</AccountsTitle>
          <AccountsGroupFromTo className="groupFromTo">
            <DatePicker
              className="btnFrom"
              label={'시작 날짜'}
              value={startDate}
              onChange={(value) => {
                setStartDate(value);
              }}
            />
            <AccountsSorting className="sorting">부터</AccountsSorting>
            <DatePicker
              className="btnTo"
              label={'종료 날짜'}
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
            />
            <AccountsSorting className="sorting">까지</AccountsSorting>
            <AccountsBtnSearch className="btnSearch">보기</AccountsBtnSearch>
          </AccountsGroupFromTo>
          <AccountsGroupInput className="groupInput">
            <AccountsBtnInput className="btnInput">입력</AccountsBtnInput>
            <FormDialog />
          </AccountsGroupInput>
        </AccountsContHeader>
        <AccountsContBody className="contBody">
          <AccountsTable className="tableWidth">
            <thead>
              <tr>
                <AccountsTableWidthFixed className="widthFixed">
                  날짜
                </AccountsTableWidthFixed>
                <th>내용</th>
                <th>금액</th>
                <th>그룹A</th>
                <th>그룹B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <AccountsTableWidthFixed className="widthFixed">
                  2023-05-17
                </AccountsTableWidthFixed>
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
