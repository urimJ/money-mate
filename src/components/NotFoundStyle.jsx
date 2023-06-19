import styled from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

export const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconBox = styled.section`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 300px;
  color: ${primaryColor};
`;

export const WarningTextBox = styled.h1`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoBackButton = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: ${primaryColor};
  color: ${bgColor};
  cursor: pointer;
`;
