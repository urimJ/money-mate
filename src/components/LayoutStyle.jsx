import styled from 'styled-components';

// Layout 컴포넌트와 관련된 styled component
export const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
`;

export const HeaderSection = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  font-family: 'Kaushan Script', cursive;
  font-size: 36px;
  border: none;
  box-shadow: ${(props) =>
    props.themeMode
      ? `0px 10px 55px -4px rgba(255, 255, 255, 0.75);`
      : `0px 10px 55px -4px rgba(65, 120, 203, 0.75);`};
  z-index: 1;
`;

export const HeaderText = styled.span`
  font-size: 30px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    font-size: 35px;
  }
`;

export const LogoutButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 5px;
  right: 5px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  transition: all 0.3s;
  cursor: pointer;
  display: ${(props) => (props.isLoggedIn ? '' : 'none')};
  &:hover {
    box-shadow: ${(props) =>
      props.themeMode
        ? `0 0 15px -4px rgba(255, 255, 255, 0.75);`
        : `0 0 15px -4px rgba(65, 120, 203, 0.75);`};
    font-size: 15px;
  }
`;
