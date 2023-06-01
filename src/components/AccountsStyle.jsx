import styled from 'styled-components';
import { bgColor, primaryColor, textColor } from '../../GlobalStyle';

// Accounts 페이지와 관련된 styled component
export const AccountsContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;

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

export const SideNavBar = styled.section`
  @keyframes automove {
    from {
      left: -50px;
    }
    to {
      left: 0px;
    }
  }
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 5px;
  top: 5px;
  color: ${primaryColor};
  border: none;
  border-radius: 0 15px 15px 0;
  background-color: transparent;
  transition: all 0.5s;
  animation: automove 1s ease infinite alternate;
  cursor: pointer;
  &:hover {
    animation: none;
  }
`;

// Yurim------------------------------------------

export const AccountsGroupFromTo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  margin: 0px 160px 20px 0px;
`;

export const AccountsGroupInput = styled.div`
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
`;

export const AccountsBtnInput = styled.button`
  margin: 0px 0px 20px 20px;
  background-color: rgb(65, 120, 203);
  color: white;
`;

export const AccountsContBody = styled.div`
  margin: 0px 160px;
  background-color: rgb(33, 236, 169);
  border: 3px solid rgb(65, 120, 203);
  height: 350px;
`;

export const AccountsTable = styled.table`
  border: 1px solid rgb(65, 120, 203);
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 23px;
  padding: 0 30px;
  text-align: center;
  width: calc(100vw - 320px);
  border: 0px;
  border-spacing: 5px;
  border-collapse: separate;
`;

export const AccountsTableWidthFixed = styled.tr`
  width: 180px;
`;

export const AccountsAmountColorSpending = styled.td`
  color: rgb(248, 77, 77);
`;

export const AccountsAmountColorIncome = styled.td`
  color: rgb(45, 103, 251);
`;
