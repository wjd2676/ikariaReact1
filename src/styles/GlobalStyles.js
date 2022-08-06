import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box; 
}
body {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-weight: 500;
    width: 100%;
    height:50%;
}

`;

export default GlobalStyles;
