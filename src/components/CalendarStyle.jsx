// Calendar 페이지와 관련된 styled component
import styled from 'styled-components';
import { primaryColor, bgColor } from '../../GlobalStyle';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid blue;
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: 'AppleSDGothicNeoB';
  color: ${primaryColor};
  margin-bottom: 10px;
  /* border: 2px solid green; */
  position: absolute;
  /* top:-20px; */
  top: 50px;
  left: 53px;
`;

export const CalendarButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${primaryColor};
  color: ${bgColor};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 50px;
`;

export const CalendarContainer = styled.section`
  width: 100%;
  height: 90%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 40px;
  z-index: 0;
  /* border: 5px solid yellow; */

  /* @media (max-width: 500px) or (max-height: 800px) {
    display: none;
  } */
  @media (min-width: 1400px) {
    padding: 0 100px;
  }
`;

export const ModalStyle = {
  content: {
    width: '30%',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${bgColor}`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: `${primaryColor}`,
    fontFamily: 'AppleSDGothicNeoB',
    border: `2px solid ${primaryColor}`,
    // '@media (maxWidth: 150px)': {
    //   display: 'none',
    // },
    // '@media (minWidth: 300px)': {
    //   width: '300px',
    // },
  },
};

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ModalButton = styled.button`
  width: 80px;
  height: 25px;
  background-color: ${primaryColor};
  color: ${bgColor};
  border-radius: 5px;
  border: 1px solid ${bgColor};
  cursor: pointer;
`;
