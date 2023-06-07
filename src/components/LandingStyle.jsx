import styled from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

// Landing 페이지와 관련된 styled component
export const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingTitle = styled.h1`
  width: 500px;
  font-size: 24px;
  font-family: 'AppleSDGothicNeoB';
  text-align: center;
`;

export const LandingSection = styled.section`
  width: 500px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const LandingForm = styled.form`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LandingInputButton = styled.button`
  width: 50px;
  height: 100%;
  background-color: ${primaryColor};
  color: ${bgColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
