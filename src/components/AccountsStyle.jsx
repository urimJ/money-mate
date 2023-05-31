import styled from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

// Accounts 페이지와 관련된 styled component
export const AccountsContainer = styled.div`
  width: 100%;
  height: 92vh-272px;
`;

export const AccountsTitle = styled.p`
  /* font-family: 'Nanum Gothic', sans-serif; */
  font-size: 30px; //36px->30px
  font-weight: bold;
  color: ${primaryColor};
  margin: 0px 20px 10px 160px;
  padding: 30px 0px 0px 0px; //80px->60px
`

export const AccountsContHeader = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
`


export const AccountsGroupFromTo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  margin: 0px 160px 20px 0px;
`
export const AccountsGroupInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  margin: 0px 160px 20px 0px;
`
export const AccountsSorting = styled.p`
  margin: 0px 15px 0px 10px;
`
export const AccountsBtnSearch = styled.button`
  margin : 0px 0px 0px 20px;
  background-color: rgb(65,120,203);
  color: white;
  width: 114px;
  height: 50px;
  border: 0px solid ${primaryColor};
  border-radius: 10px;
`
export const AccountsBtnInput = styled.button`
  margin : 0px 0px 20px 20px;
  background-color: rgb(65,120,203);
  color: white;
  width: 114px;
  height: 50px;
  border: 0px solid ${primaryColor};
  border-radius: 10px;
`
export const AccountsContBody = styled.div`
  
  margin: 0px 160px;
  /* background-color: rgb(33, 236, 169); */
  border: 3px solid rgb(65, 120, 203);
  height: 450px;
`
export const AccountsTable = styled.table`
  
  /* font-family: 'Nanum Gothic', sans-serif; */
  font-size: 18px; //23px;
  padding: 0px 0px;
  text-align: center;
  width: 100%;
  /* width: calc(100vw - 320px); */
  border-spacing: 5px;
  border-collapse: collapse;
`

export const AccountsTableHeadTh = styled.th`
  border-bottom: 3px solid rgb(65,120,203);
  border-left: 3px solid rgb(65,120,203);
  border-right: 3px solid rgb(65,120,203);
  padding: 10px 30px;

`
export const AccountsTableHeadTd = styled.td`
  border-bottom: 2px solid rgb(65,120,203);
  border-left: 3px solid rgb(65,120,203);
  border-right: 3px solid rgb(65,120,203);
  padding: 10px 30px;
`
export const AccountsAmountColorSpending = styled.td`
  color: rgb(248,77,77);
`
export const AccountsAmountColorIncome = styled.td`
  color: rgb(45,103,251);
`