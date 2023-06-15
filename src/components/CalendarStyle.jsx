// Calendar 페이지와 관련된 styled component
import styled from 'styled-components';
import { primaryColor, bgColor } from '../../GlobalStyle';



export const PageContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CalendarSection = styled.section`
  width: 100%;
  height: 100%;
  padding:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top:30px;
  z-index: 0;
`;

export const Title=styled.div`
    font-size: 20px;
    font-family: 'AppleSDGothicNeoB';
    color: ${primaryColor};
    margin-bottom: 10px;
`;

export const CalendarButton = styled.button`
  width: 80px;
  height: 25px;
  background-color: ${primaryColor};
  color: ${bgColor};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  position: absolute;
  top:-20px;
  right: 10px;
`;

export const ModalStyle={
  content:{
    width:'300px',
    height:'300px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:`${bgColor}`,
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    color:`${primaryColor}`,
    fontFamily: 'AppleSDGothicNeoB',
    border:`2px solid ${primaryColor}`,
  },
};

export const ModalForm=styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ModalButton=styled.button`
  width: 80px;
  height: 25px;
  background-color: ${primaryColor};
  color: ${bgColor};
  border-radius: 5px;
  border: 1px solid ${bgColor};
  cursor: pointer;
`;
