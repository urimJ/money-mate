import styled from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

// Guide 페이지와 관련된 styled component
export const GuideContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  overflow-y: auto;
  border: 3px solid red;
`;

export const GuideFirstScene = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid blue;
`;

export const GuideSecondScene = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid brown;
`;

export const GuideHeader = styled.h1`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
`;

export const GuideContent = styled.section`
  width: 700px;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 30px;
`;

export const GuideNextButton = styled.button`
  width: 100px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  border-radius: 15px;
  background-color: ${bgColor};
  color: ${primaryColor};
  cursor: pointer;
`;
