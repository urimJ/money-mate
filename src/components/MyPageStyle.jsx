import styled from 'styled-components';
import { bgColor, primaryBoldColor, primaryColor } from '../../GlobalStyle';

export const MyPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyPageProfileSection = styled.section`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid black;
`;

export const MyPageProfileBox = styled.section`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  background-image: url(${(props) => props.defaultProfile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const MyPageContentSection = styled.section`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 1px solid black;
`;

export const MyPageCategoryInput = styled.input`
  width: 80%;
  height: 40px;
  border: 1px solid ${primaryColor};
  border-radius: 10px;
  padding: 5px;
  &:focus {
    border: 2px solid ${primaryBoldColor};
    outline: none;
  }
`;

export const MyPageCategorySection = styled.section`
  width: 90%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 30px;
  padding: 15px;
  border: 1px solid black;
  overflow-y: auto;
`;

export const MyPageCategoryButton = styled.button`
  width: 235px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${primaryColor};
  color: ${bgColor};
`;
