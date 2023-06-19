// Calendar 페이지와 관련된 styled component
import styled from 'styled-components';
import { primaryColor, bgColor } from '../../GlobalStyle';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: 'AppleSDGothicNeoB';
  color: ${primaryColor};
  margin-bottom: 10px;
  position: absolute;
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
    '@media (minWidth: 300px)': {
      width: '300px',
    },
  },
};

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SubmitButton = styled.button`
  width: 80px;
  height: 25px;
  margin: 25px;
  position: relative;
  left: 152px;
  background-color: ${primaryColor};
  color: ${bgColor};
  border-radius: 5px;
  border: 1px solid ${bgColor};
  cursor: pointer;
`;

export const CloseButton = styled.button`
  width: 80px;
  height: 25px;
  position: absolute;
  bottom: 17px;
  right: 20px;
  background-color: ${primaryColor};
  color: ${bgColor};
  border-radius: 5px;
  border: 1px solid ${bgColor};
  cursor: pointer;
`;

export const ModalTitle = styled.h1`
  font-size: 20px;
  margin-top: 20px;
`;

export const ModalList = styled.div`
  width: 80%;
  height: 80%;
`;

export const ModalListItem = styled.div`
  font-size: 20px;
  margin: 10px 0px;
`;

export const DeleteButton = styled.button`
  width: 80px;
  height: 25px;
  position: absolute;
  right: 20px;
  background-color: ${primaryColor};
  color: ${bgColor};
  border-radius: 5px;
  border: 1px solid ${bgColor};
  cursor: pointer;
`;
