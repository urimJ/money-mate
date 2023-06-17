import styled from 'styled-components';

// Landing 페이지와 관련된 styled component
export const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

export const LandingTitle = styled.h1`
  width: 500px;
  font-size: 24px;
  font-family: 'AppleSDGothicNeoB';
  text-align: center;
`;

export const LandingSection = styled.section`
  width: 500px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const LandingForm = styled.form`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LandingInputButton = styled.button`
  width: 50px;
  height: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
