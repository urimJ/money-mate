import { createGlobalStyle } from 'styled-components';
import AppleSDGothicNeoL from './src/fonts/AppleSDGothicNeoL.ttf';
import AppleSDGothicNeoM from './src/fonts/AppleSDGothicNeoM.ttf';
import AppleSDGothicNeoB from './src/fonts/AppleSDGothicNeoB.ttf';
import KaushanScript from './src/fonts/KaushanScript-Regular.ttf';
import GmarketSansTTFLight from './src/fonts/GmarketSansTTFLight.ttf';
import GmarketSansTTFMedium from './src/fonts/GmarketSansTTFMedium.ttf';
import GmarketSansTTFBold from './src/fonts/GmarketSansTTFBold.ttf';

// 배경색, 글꼴 색
export const bgColor = 'white';
export const textColor = 'black';
export const primaryBoldColor = '#1F4174';
export const primaryColor = '#4178CB';
export const secondaryColor = '#fff';
// export const pointColor = "#603900";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  // 추가1. 모든 태그에 border-box 적용 (테두리와 안쪽 여백의 크기도 요소의 크기로 고려)
  * {
    box-sizing: border-box;
  }
  /* 스크롤바 없애기 */
  *::-webkit-scrollbar {
    display: none;
  }

  *::-webkit-scrollbar-thumb {
    background: ${primaryColor};
  }

  *::selection {
    color: ${textColor};
    background: #e1c489;
  }
  // 추가2. 가져온 폰트를 body태그 안에 있으면 다 적용
  body{
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-family: "GmarketSansTTFLight";
  }
  // 추가3. 링크에 모든 밑줄 삭제
  a{
    text-decoration: none;
    color:inherit;  // 색을 부모로부터 상속 받음
  }

  /* Animation declaration, Font-face Setting */
  @font-face {
    font-family: 'Kaushan Script';
    src: url(${KaushanScript});
  }
  @font-face {
    font-family: "AppleSDGothicNeoM";
    src: url(${AppleSDGothicNeoM});
  }
  @font-face {
    font-family: "AppleSDGothicNeoL";
    src: url(${AppleSDGothicNeoL});
  }
  @font-face {
    font-family: "AppleSDGothicNeoB";
    src: url(${AppleSDGothicNeoB});
  }
  @font-face {
    font-family: "GmarketSansTTFLight";
    src: url(${GmarketSansTTFLight});
  }
  @font-face {
    font-family: "GmarketSansTTFMedium";
    src: url(${GmarketSansTTFMedium});
  }
  @font-face {
    font-family: "GmarketSansTTFBold";
    src: url(${GmarketSansTTFBold});
  }

  @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}   
  }
  @keyframes fadeOut {
    from {opacity: 1;}
    to {opacity: 0;}   
  }

  @-webkit-keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}   
  }
  @-webkit-keyframes fadeOut {
    from {opacity: 1;}
    to {opacity: 0;}   
  }
  .fadeIn{
    animation: fadeIn;
    animation-duration: 0.8s;
  }

  .fadeOut{
    animation: fadeOut;
    animation-duration: 0.8s;
  }
`;

export default GlobalStyle;
