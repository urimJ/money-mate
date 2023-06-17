import styled, { keyframes } from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

// Accounts 페이지와 관련된 styled component
export const blink = keyframes`
  from {
    opacity: 0.25;
  } to {
    opacity: 1;
  }
`;

export const AccountsContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;

export const SideNavBar = styled.section`
  width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: ${(props) => (props.navToggle ? '0' : '-500px')};
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 0 25px 25px 0;
  transition: all 0.4s;
  z-index: 1;
  @media all and (max-width: 1280px) {
    width: 300px;
    left: ${(props) => (props.navToggle ? '0' : '-300px')};
  }
  @media (max-height: 450px) or (max-width: 500px) {
    left: -500px;
  }
`;

export const SideNavBarButton = styled.section`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${(props) => (props.navToggle ? '440px' : '5px')};
  top: 5px;
  color: ${(props) =>
    props.navToggle ? props.theme.bgColor : props.theme.primaryColor};
  border: none;
  background-color: transparent;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 2;
  @media all and (max-width: 1280px) {
    left: ${(props) => (props.navToggle ? '240px' : '5px')};
  }
  @media (max-height: 450px) or (max-width: 500px) {
    display: none;
  }
`;

export const NavItem1 = styled.section`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  transition: all 0.5s;
  animation: ${blink} 1s 0s infinite alternate;
`;

export const NavItem2 = styled.section`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(0, -50%);
  transition: all 0.5s;
  animation: ${blink} 1s 0.25s infinite alternate;
`;

export const NavItem3 = styled.section`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(0, -50%);
  transition: all 0.5s;
  animation: ${blink} 1s 0.5s infinite alternate;
`;

export const NavHeader = styled.span`
  width: 170px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: 'Kaushan Script';
  color: ${(props) => props.theme.bgColor};
  border-left: 7px solid ${(props) => props.theme.bgColor};
  border-right: 7px solid ${(props) => props.theme.bgColor};
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    width: 180px;
    font-size: 26px;
  }
`;

export const FirstNavigator = styled.button`
  width: 80%;
  height: 40px;
  position: absolute;
  top: 100px;
  right: 0;
  font-family: "GmarketSansTTFLight";
  color: ${(props) =>
    props.currentPage === 0 ? props.theme.primaryColor : props.theme.bgColor};
  background-color: ${(props) =>
    props.currentPage === 0 ? props.theme.bgColor : props.theme.primaryColor};
  border: ${(props) =>
    props.currentPage === 0 ? 'none' : `1px solid ${props.theme.bgColor}`};
  border-right: none;
  border-radius: 10px 0 0 10px;
  transition: all 0.5s;
  cursor: pointer;
`;

export const SecondNavigator = styled.button`
  width: 80%;
  height: 40px;
  position: absolute;
  top: 150px;
  right: 0;
  font-family: "GmarketSansTTFLight";
  color: ${(props) =>
    props.currentPage === 1 ? props.theme.primaryColor : props.theme.bgColor};
  background-color: ${(props) =>
    props.currentPage === 1 ? props.theme.bgColor : props.theme.primaryColor};
  border: ${(props) =>
    props.currentPage === 1 ? 'none' : `1px solid ${props.theme.bgColor}`};
  border-right: none;
  border-radius: 10px 0 0 10px;
  transition: all 0.5s;
  cursor: pointer;
`;

export const ThirdNavigator = styled.button`
  width: 80%;
  height: 40px;
  position: absolute;
  top: 200px;
  right: 0;
  font-family: "GmarketSansTTFLight";
  color: ${(props) =>
    props.currentPage === 2 ? props.theme.primaryColor : props.theme.bgColor};
  background-color: ${(props) =>
    props.currentPage === 2 ? props.theme.bgColor : props.theme.primaryColor};
  border: ${(props) =>
    props.currentPage === 2 ? 'none' : `1px solid ${props.theme.bgColor}`};
  border-right: none;
  border-radius: 10px 0 0 10px;
  transition: all 0.5s;
  cursor: pointer;
`;

export const MyPageNavigator = styled.button`
  width: 80%;
  height: 40px;
  position: absolute;
  top: 250px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.currentPage === 3 ? props.theme.primaryColor : props.theme.bgColor};
  background-color: ${(props) =>
    props.currentPage === 3 ? props.theme.bgColor : props.theme.primaryColor};
  border: ${(props) =>
    props.currentPage === 3 ? 'none' : `1px solid ${props.theme.bgColor}`};
  border-right: none;
  border-radius: 10px 0 0 10px;
  transition: all 0.5s;
  cursor: pointer;
`;

export const MypageTextBox = styled.section`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  &:hover {
    animation: rotate 2s linear infinite;
  }
`;

export const NavNewsHeader = styled.p`
  color: ${(props) => props.theme.primaryBoldColor};
  font-family: 'GmarketSansTTFBold';
  font-weight: 700;
`;

export const NavNewsSection = styled.section`
  width: 95%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, 0);
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  padding: 5px;
  overflow-y: auto;
  transition: all 0.5s;
  @media all and (max-height: 940px) {
    height: 50vh;
  }
  @media all and (max-height: 880px) {
    height: 40vh;
  }
  @media all and (max-height: 748px) {
    height: 35vh;
  }
  @media all and (max-height: 678px) {
    height: 30vh;
  }
  @media all and (max-height: 500px) {
    display: none;
  }
`;

// News API--------------------------------------
export const NewsBox = styled.section`
  width: 99%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.2);
  }
`;
export const NewsThumbnailSection = styled.section`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-image: url(${(props) => props.newsThumbnail});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const NewsTextBox = styled.section`
  width: calc(100% - 65px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  color: ${(props)=>props.theme.textColor};
`;

export const NewsHeaderLine = styled.span`
  width: 100%;
  height: 20px;
  font-family: 'GmarketSansTTFBold';
  font-size: 14px;
  font-weight: 500;
  
`;

export const NewsDescription = styled.span`
  width: 100%;
  height: 20px;
  font-size: 13px;
  font-weight: 100;
`;

export const NewsSubTextBox = styled.section`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

export const NewsSource = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  font-size: 10px;
`;

export const Newspublished = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 100;
  font-size: 10px;
`;

// Accounts--------------------------------------
export const AccountsSection = styled.section`
  width: ${(props) => (props.navToggle ? `calc(100vw - 500px)` : '100vw')};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  height: 100vh;
  transition: all 0.5s;

  /* 레이아웃 스케치용 border */
  border: 5px solid brown;

  @media all and (max-width: 1280px) {
    width: ${(props) => (props.navToggle ? 'calc(100vw - 300px)' : '100vw')};
  }
  @media (max-height: 450px) or (max-width: 500px) {
    width: 100%;
  }
`;

// Yurim------------------------------------------
export const AccountsTitle = styled.p`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: ${primaryColor};
  margin: 0px 20px 10px 160px;
  padding: 40px 0px 0px 0px;
`;

export const AccountsContHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media all and (max-width: 1280px) {
    width: ${(props) => (props.navToggle ? 'calc(100vw - 300px)' : '100vw')};
  }
  @media (max-height: 450px) or (max-width: 678px) {
    width: 100%;
  }
`;

export const AccountsGroupFromTo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  margin: 0px 160px 20px 0px;

  @media all and (max-width: 1280px) {
    width: ${(props) => (props.navToggle ? 'calc(100vw - 300px)' : '100vw')};
  }
  @media (max-height: 450px) or (max-width: 678px) {
    width: 100%;
  }
`;

export const AccountsSorting = styled.p`
  margin: 0px 15px 0px 10px;
`;

export const AccountsBtnSearch = styled.button`
  margin: 0px 0px 0px 20px;
  background-color: ${primaryColor};
  color: ${bgColor};
  width: 114px;
  height: 50px;
  border: 0px solid ${primaryColor};
  border-radius: 10px;
  cursor: pointer;

  @media all and (max-width: 1280px) {
    width: ${(props) => (props.navToggle ? '100px' : '114px')};
  }
  @media (max-height: 450px) or (max-width: 678px) {
    width: 10vw;
  }
`;

export const AccountsContBody = styled.div`
  margin: 0px 160px;
  // background-color: rgb(33, 236, 169);
  border: 3px solid ${primaryColor};
  height: 450px;
  overflow: auto;

  @media all and (max-width: 1280px) {
    width: ${(props) => (props.navToggle ? 'calc(100vw - 300px)' : '100vw')};
  }
  @media (max-height: 450px) or (max-width: 678px) {
    width: 100%;
  }
`;

export const AccountsTable = styled.table`
  border: 1px solid ${primaryColor};
  // font-family: 'Nanum Gothic', sans-serif;
  font-size: 18px;
  padding: 0 0px;
  text-align: center;
  width: 100%;
  border-spacing: 5px;
  border-collapse: collapse;
`;

export const AccountsTableHeadTh = styled.th`
  border-bottom: 2px solid ${primaryColor};
  border-left: 3px solid ${primaryColor};
  border-right: 3px solid ${primaryColor};
  padding: 10px 30px;
  border-collapse: collapse;
  font-weight: bold;
`;

export const AccountsTableBodyTd = styled.td`
  padding: 8px 30px;
  border-left: 1px solid ${primaryColor};
  border-right: 1px solid ${primaryColor};
  //border-bottom: 1px solid ${primaryColor};
  border-collapse: collapse;
`;

export const AccountsAmountColorSpending = styled.td`
  color: rgb(248, 77, 77);
  padding: 8px 30px;
  border-left: 1px solid ${primaryColor};
  border-right: 1px solid ${primaryColor};
  //border-bottom: 1px solid ${primaryColor};
  border-collapse: collapse;
`;

export const AccountsAmountColorIncome = styled.td`
  color: rgb(45, 103, 251);
  padding: 8px 30px;
  border-left: 1px solid ${primaryColor};
  border-right: 1px solid ${primaryColor};
  //border-bottom: 1px solid ${primaryColor};
  border-collapse: collapse;
`;
