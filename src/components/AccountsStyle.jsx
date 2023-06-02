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
  background-color: ${primaryColor};
  border-radius: 0 25px 25px 0;
  transition: all 0.4s;
  z-index: 1;
  @media all and (max-width: 1280px) {
    width: 300px;
    left: ${(props) => (props.navToggle ? '0' : '-300px')};
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
  color: ${(props) => (props.navToggle ? '#fff' : { primaryColor })};
  border: none;
  background-color: transparent;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 2;
  @media all and (max-width: 1280px) {
    left: ${(props) => (props.navToggle ? '240px' : '5px')};
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
  color: ${bgColor};
  border-left: 7px solid ${bgColor};
  border-right: 7px solid ${bgColor};
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    width: 180px;
    font-size: 26px;
  }
`;

export const FirstNavigator = styled.button`
  width: 90%;
  height: 70px;
  position: absolute;
  top: 100px;
  right: 0;
  color: ${(props) =>
    props.currentPage === 0 ? `${primaryColor}` : `${bgColor}`};
  background-color: ${(props) =>
    props.currentPage === 0 ? `${bgColor}` : `${primaryColor}`};
  border: ${(props) =>
    props.currentPage === 0 ? 'none' : `1px solid ${bgColor}`};
  border-right: none;
  border-radius: 10px 0 0 10px;
  transition: all 0.5s;
  cursor: pointer;
`;

export const SecondNavigator = styled.button`
  width: 90%;
  height: 70px;
  position: absolute;
  top: 180px;
  right: 0;
  color: ${(props) =>
    props.currentPage === 1 ? `${primaryColor}` : `${bgColor}`};
  background-color: ${(props) =>
    props.currentPage === 1 ? `${bgColor}` : `${primaryColor}`};
  border: ${(props) =>
    props.currentPage === 1 ? 'none' : `1px solid ${bgColor}`};
  border-right: none;
  border-radius: 10px 0 0 10px;
  transition: all 0.5s;
  cursor: pointer;
`;

export const ThirdNavigator = styled.button`
  width: 90%;
  height: 70px;
  position: absolute;
  top: 260px;
  right: 0;
  color: ${(props) =>
    props.currentPage === 2 ? `${primaryColor}` : `${bgColor}`};
  background-color: ${(props) =>
    props.currentPage === 2 ? `${bgColor}` : `${primaryColor}`};
  border: ${(props) =>
    props.currentPage === 2 ? 'none' : `1px solid ${bgColor}`};
  border-right: none;
  border-radius: 10px 0 0 10px;
  transition: all 0.5s;
  cursor: pointer;
`;

export const NavNewsHeader = styled.p`
  position: absolute;
  top: 45%;
  color: ${bgColor};
`;

export const NavNewsSection = styled.section`
  width: 95%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, 0);
  background-color: ${bgColor};
  border-radius: 10px;
  padding: 5px;
  overflow-y: auto;
  @media all and (max-height: 900px) {
    height: 400px;
  }
  @media all and (max-height: 800px) {
    height: 300px;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: ${bgColor};
  }

  ::-webkit-scrollbar-thumb {
    background: ${primaryColor};
    border-radius: 15px;
  }
`;

// News API--------------------------------------
export const NewsContainer = styled.section`
  width: 99%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  cursor: pointer;
`;
export const NewsThumbnailSection = styled.section`
  width: 60px;
  height: 60px;
  border: 1px solid brown;
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
`;

export const NewsHeaderLine = styled.span`
  width: 100%;
  height: 20px;
  font-family: 'AppleSDGothicNeoB';
  font-weight: 700;
`;

export const NewsDescription = styled.span`
  width: 100%;
  height: 20px;
  font-family: 'AppleSDGothicNeoL';
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
  font-family: 'AppleSDGothicNeoL';
  font-weight: 100;
  font-size: 10px;
`;

export const Newspublished = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryColor};
  font-family: 'AppleSDGothicNeoL';
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
`;

// Yurim------------------------------------------
export const AccountsTitle = styled.p`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: ${primaryColor};
  margin: 0px 20px 10px 160px;
  padding: 80px 0px 0px 0px;
`;

export const AccountsContHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AccountsGroupFromTo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  margin: 0px 160px 20px 0px;
`;

export const AccountsSorting = styled.p`
  margin: 0px 15px 0px 10px;
`;

export const AccountsBtnSearch = styled.button`
  margin: 0px 0px 0px 20px;
  background-color: rgb(65, 120, 203);
  color: white;
  width: 114px;
  height: 50px;
  border: 0px solid ${primaryColor};
  border-radius: 10px;
`;

export const AccountsBtnInput = styled.button`
  margin: 0px 0px 20px 20px;
  background-color: rgb(65, 120, 203);
  color: white;
`;

export const AccountsContBody = styled.div`
  margin: 0px 160px;
  // background-color: rgb(33, 236, 169);
  border: 3px solid rgb(65, 120, 203);
  height: 450px;
`;

export const AccountsTable = styled.table`
  border: 1px solid rgb(65, 120, 203);
  // font-family: 'Nanum Gothic', sans-serif;
  font-size: 18px;
  padding: 0 0px;
  text-align: center;
  width: 100%;
  border-spacing: 5px;
  border-collapse: collapse;
`;

export const AccountsTableHeadTh = styled.th`
  border-bottom: 2px solid rgb(65, 120, 203);
  border-left: 3px solid rgb(65, 120, 203);
  border-right: 3px solid rgb(65, 120, 203);
  padding: 10px 30px;
  border-collapse: collapse;
`;

export const AccountsAmountColorSpending = styled.td`
  color: rgb(248, 77, 77);
`;

export const AccountsAmountColorIncome = styled.td`
  color: rgb(45, 103, 251);
`;
