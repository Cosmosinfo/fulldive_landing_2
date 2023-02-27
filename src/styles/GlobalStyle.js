import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    *{
        box-sizing:boerder-box;
        font-family: 'Pretendard';
    }
`;

export default GlobalStyle;
