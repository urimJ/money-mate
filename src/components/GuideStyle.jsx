import styled from 'styled-components';

// Guide 페이지와 관련된 styled component
export const GuideContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GuideHeader = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 18px;
`;

export const GuideContent = styled.section`
  width: 70%;
  height: 70%;
  border: 1px solid black;
  border-radius: 30px;
`;
