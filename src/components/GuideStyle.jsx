import styled, { css } from 'styled-components';
import { bgColor, primaryColor } from '../../GlobalStyle';

// Guide 페이지와 관련된 styled component
export const GuideContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

// First Scene-----------------------------------
export const GuideFirstScene = styled.section`
  width: 100%;
  height: 100vh;
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
  color: ${(props) => props.theme.primaryColor};
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
  color: ${(props) => props.theme.primaryColor};
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 10px;
  top: 10px;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.bgColor};
  font-family: 'GmarketSansTTFLight';
  color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
  z-index: 1;
  @media all and (max-width: 720px) {
    width: 70px;
    height: 35px;
  }
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
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 17.5%;
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
    width: 800px;
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
  color: ${(props) => props.theme.primaryColor};
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
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45%;
  opacity: 0;
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
    width: 800px;
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
  color: ${(props) => props.theme.primaryColor};
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
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 7.5%;
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
    width: 800px;
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
  color: ${(props) => props.theme.primaryColor};
`;

export const Section3RightBox = styled.section`
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// Third Scene-----------------------------------
export const GuideThirdScene = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'GmarketSansTTFLight';
`;

export const InfoHeader = styled.h1`
  width: 1000px;
  text-align: center;
  font-size: 24px;
  font-family: 'GmarketSansTTFBold';
  position: relative;
`;

export const InfoTeamNum = styled.span`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translate(0, -50%);
  font-family: 'GmarketSansTTFLight';
  font-size: 16px;
`;

export const InfoCardSection = styled.section`
  width: 1000px;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`;

export const InfoCard1 = styled.div`
  width: 90%;
  height: 90%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  border-radius: 15px;
  border: none;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
`;

export const InfoCard2 = styled.div`
  width: 90%;
  height: 90%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  border-radius: 15px;
  border: none;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
`;

export const InfoCard3 = styled.div`
  width: 90%;
  height: 90%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  border-radius: 15px;
  border: none;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
`;

export const InfoCard4 = styled.div`
  width: 90%;
  height: 90%;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  border-radius: 15px;
  border: none;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
`;

export const InfoProfile = styled.section`
  width: 50%;
  height: 100%;
  background-image: url(${(props) => props.profile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.3);
`;

export const InfoRightSection = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
`;

export const InfoName = styled.p`
  font-family: 'GmarketSansTTFBold';
`;

export const InfoSubText = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 2;
`;

export const InfoSubIcon = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  position: absolute;
  left: 0;
  bottom: 15px;
  font-size: 22px;
`;
