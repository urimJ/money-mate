import styled from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

// Guide 페이지와 관련된 styled component
export const GuideContainer = styled.div`
  width: 100%;
  min-height: 90vh;
`;

export const GuideFirstScene = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GuideSecondScene = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GuideHeader = styled.h1`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
`;

export const GoToNextSection = styled.section`
  @keyframes moved {
    from {
      bottom: 1%;
    }
    to {
      bottom: 5%;
      opacity: 0.5;
    }
  }
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  bottom: 3%;
  cursor: pointer;
  transition: all 0.5s;
  animation: moved 1s ease infinite alternate;
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
