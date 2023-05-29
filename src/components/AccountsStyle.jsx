import styled from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

// Accounts 페이지와 관련된 styled component
export const AccountsContainer = styled.div`
  width: 100%;
  height: 92vh;
`;

export const AccountsTitle = styled.p`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: ${primaryColor};
  margin: 0px 0px 0px 160px;
  padding: 80px 0px 0px 0px;
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
`
export const AccountsBtnInput = styled.button`
  margin : 0px 0px 20px 20px;
  background-color: rgb(65,120,203);
  color: white;
`