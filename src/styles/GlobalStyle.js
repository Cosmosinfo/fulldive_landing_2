import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    *{
        box-sizing:boerder-box;
        font-family: 'Pretendard';
    }
    body, div {
    font-family: 'Pretendard';
  }

  span, h1, h2, h3, h4, h5, p, input, label, button, textarea, ul, li {
    font-family: 'Pretendard';
  }
`;

export default GlobalStyle;
