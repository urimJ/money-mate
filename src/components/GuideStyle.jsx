import styled, { css } from 'styled-components';
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
  position: fixed;
  right: 10px;
  top: 10px;
  border: none;
  border-radius: 15px;
  background-color: ${bgColor};
  color: ${primaryColor};
  cursor: pointer;
  z-index: 1;
`;

// Second Scene-----------------------------------
export const GuideSecondScene = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'GmarketSansTTFLight';
  overflow: auto;
`;

export const SecondSection1 = styled.section`
  @keyframes slideLeft {
    from {
      opacity: 0;
      left: -550px;
    }
    to {
      opacity: 1;
      left: 5%;
    }
  }
  width: 550px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 20%;
  opacity: 0;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
  animation: ${(props) =>
    props.inView
      ? css`
          slideLeft 1s linear forwards
        `
      : ''};
  @media all and (min-width: 1280px) {
    width: 55vw;
    height: 20vh;
  }
  @media all and (max-width: 720px) {
    width: 55vw;
    height: 20vh;
    min-width: 250px;
    min-height: 100px;
  }
`;

export const Section1LeftBox = styled.section`
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: ${primaryColor};
`;

export const Section1RightBox = styled.section`
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SecondSection2 = styled.section`
  @keyframes slideRight {
    from {
      opacity: 0;
      right: -550px;
    }
    to {
      opacity: 1;
      right: 5%;
    }
  }
  width: 550px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  opacity: 0;
  transform: translate(0, -25%);
  border: none;
  border-radius: 25px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
  animation: ${(props) =>
    props.inView
      ? css`
          slideRight 1s 1s linear forwards
        `
      : ''};
  @media all and (min-width: 1280px) {
    width: 55vw;
    height: 20vh;
  }
  @media all and (max-width: 720px) {
    width: 55vw;
    height: 20vh;
    min-width: 250px;
    min-height: 100px;
  }
`;

export const Section2LeftBox = styled.section`
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Section2RightBox = styled.section`
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: ${primaryColor};
`;

export const SecondSection3 = styled.section`
  @keyframes slideLeft2 {
    from {
      opacity: 0;
      left: -550px;
    }
    to {
      left: 5%;
      opacity: 1;
    }
  }
  width: 550px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10%;
  opacity: 0;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
  animation: ${(props) =>
    props.inView
      ? css`
          slideLeft2 1s 2s linear forwards
        `
      : ''};
  @media all and (min-width: 1280px) {
    width: 55vw;
    height: 20vh;
  }
  @media all and (max-width: 720px) {
    width: 55vw;
    height: 20vh;
    min-width: 250px;
    min-height: 100px;
  }
`;

export const Section3LeftBox = styled.section`
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: ${primaryColor};
`;

export const Section3RightBox = styled.section`
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
