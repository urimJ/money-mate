import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../GlobalStyle';

// Layout 컴포넌트와 관련된 styled component
export const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
`;

export const HeaderSection = styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  font-family: 'Kaushan Script', cursive;
  font-size: 36px;
  border: none;
  box-shadow: 0px 10px 55px -4px rgba(65, 120, 203, 0.75);
`;
