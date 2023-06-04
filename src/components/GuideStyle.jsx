import styled, { keyframes } from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

// Guide 페이지와 관련된 styled component
export const GuideContainer = styled.div`
  width: 100%;
  min-height: 90vh;
`;

// First Scene-----------------------------------
export const GuideFirstScene = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FirstScenebackground1 = styled.span`
  @keyframes fadeIn1 {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.4;
    }
  }

  width: 50vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
  left: -20vw;
  font-size: 40vw;
  color: ${primaryColor};
  transform: rotate(-15deg);
  animation: fadeIn1 1s linear forwards;
`;

export const FirstScenebackground2 = styled.section`
  @keyframes fadeIn2 {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }
  width: 50vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  right: -15vw;
  font-size: 35vw;
  color: ${primaryColor};
  transform: rotate(0deg);
  animation: fadeIn2 2s linear forwards;
`;

export const GuideHeader = styled.h1`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 18px;
  font-family: 'GmarketSansTTFLight';
  line-height: 1.5;
  z-index: 1;
`;

export const GoToNextSection = styled.section`
  @keyframes moved {
    from {
      bottom: 1%;
      opacity: 0.8;
    }
    to {
      bottom: 5%;
      opacity: 0.2;
    }
  }
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 3%;
  font-size: 14px;
  font-family: 'Kaushan Script';
  display: ${(props) => (props.arrow ? '' : 'none')};
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

// Second Scene-----------------------------------
export const slideLeft = keyframes`
  from {
      opacity: 0;
      left: -550px;
    }
    to {
      left: 5%;
    }
`;

export const GuideSecondScene = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'GmarketSansTTFLight';
`;

export const SecondSection1 = styled.section`
  width: 550px;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 5%;
  left: 5%;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
  animation: ${slideLeft} 1s linear forwards;
  @media all and (max-width: 678px) {
    width: 55vw;
    height: 20vh;
    min-width: 250px;
    min-height: 100px;
  }
`;

export const Section1LeftBox = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: ${primaryColor};
`;

export const Section1RightBox = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SecondSection2 = styled.section`
  @keyframes slideRight {
    from {
      right: -550px;
    }
    to {
      right: 5%;
    }
  }
  width: 550px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(0, -50%);
  border: none;
  border-radius: 25px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
  animation: slideRight 1s 1s linear forwards;
  @media all and (max-width: 678px) {
    width: 55vw;
    height: 20vh;
    min-width: 250px;
    min-height: 100px;
  }
`;

export const Section2LeftBox = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Section2RightBox = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: ${primaryColor};
`;

export const SecondSection3 = styled.section`
  width: 550px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5%;
  left: 5%;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
  animation: ${slideLeft} 1s 2s linear forwards;
  @media all and (max-width: 678px) {
    width: 55vw;
    height: 20vh;
    min-width: 250px;
    min-height: 100px;
  }
`;

export const Section3LeftBox = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: ${primaryColor};
`;

export const Section3RightBox = styled.section`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
