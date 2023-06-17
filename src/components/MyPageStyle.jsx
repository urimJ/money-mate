import styled from 'styled-components';
import { primaryBoldColor } from '../../GlobalStyle';

export const MyPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

// ---------------------------------------------------------
export const MyPageHeaderSection = styled.section`
  width: 90%;
  height: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid black;
`;

export const MyPageProfileSection = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media all and (min-width: 1200px) {
    width: 15%;
  }
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
  transition: all 0.5s;
  @media all and (max-width: 620px) {
    width: 75px;
    height: 75px;
  }
`;

export const MyPageProfileInput = styled.label`
  width: 60px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.primaryColor};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const MyPageRightSection = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  @media all and (max-width: 620px) {
  }
  @media all and (min-width: 1200px) {
    width: 85%;
  }
`;

export const MyPageInfoBox = styled.section`
  height: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyPageInfo = styled.h1`
  width: ${(props) => props.navToggle ? `calc(100% - 14vw)` : `calc(100% - 150px)`};
  height: 100%;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.navToggle ? '1.2vw' : '16px'};
  font-family: 'GmarketSansTTFBold';
  @media all and (max-width: 520px) {
    font-size: 14px;
  }
  @media all and (max-width: 485px) {
    width: calc(100% - 80px);
  }
  @media all and (max-width: 380px) {
    font-size: 12px;
  }
  transition: all 0.3s;
`;

export const MyPageThemeToggle = styled.section`
  width: ${(props) => props.navToggle ? '14vw' : '150px'};
  height: 90%;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 25px;
  cursor: pointer;
  @media all and (max-width: 485px) {
    width: 80px;
  }
`;

export const MypageThemeLight = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.primaryBoldColor};
  border-radius: 25px;
  background-color: ${(props) =>
    props.themeMode ? props.theme.primaryColor : props.theme.primaryBoldColor};
  color: ${(props) =>
    props.themeMode ? props.theme.bgBoldColor : props.theme.bgColor};
  cursor: pointer;
  transition: all 0.3s;
`;

export const MypageThemeDark = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid ${primaryBoldColor};
  border-radius: 25px;
  background-color: ${(props) =>
    props.themeMode ? props.theme.bgBoldColor : props.theme.bgColor};
  color: ${(props) =>
    props.themeMode ? props.theme.primaryColor : props.theme.primaryBoldColor};
  cursor: pointer;
  transition: all 0.3s;
`;

export const MyPageCheckList = styled.section`
  width: 100%;
  height: 80%;
  padding: 10px;
  font-size: 12px;
  transition: all 0.3s;
  border: 1px solid black;
`;

// ---------------------------------------------------------
export const MyPageContentSection = styled.section`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid black;
`;

export const MyPageCategoryBox = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyPageCategoryInput = styled.input`
  width: calc(98% - 80px);
  height: 40px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.primaryColor};
  padding: 5px;
  font-family: 'GmarketSansTTFLight';
  &:focus {
    border: 2px solid ${(props) => props.theme.primaryBoldColor};
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const MyPageCategoryInputButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
`;

export const MyPageCategorySection = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  gap: 30px;
  padding: 15px;
  border: 1px solid black;
  overflow-y: auto;
`;

export const MyPageCategoryButton = styled.button`
  width: 250px;
  height: 40px;
  position: relative;
  border: 1px solid ${(props) => props.theme.primaryBoldColor};
  border-radius: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.primaryBoldColor};
  @media all and (max-width: 650px) {
    width: 200px;
  }
  transition: all 0.5s;
`;

export const CategoryDeleteButton = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  cursor: pointer;
  display: ${(props) => (props.idx < 5 ? 'none' : '')};
`;
