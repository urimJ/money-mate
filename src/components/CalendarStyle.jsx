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
