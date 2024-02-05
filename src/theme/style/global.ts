import { createGlobalStyle } from 'styled-components';

import FONTS from './fonts';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: ${FONTS.fontFamily.roboto};
        font-weight: ${FONTS.fontWeight.s};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        outline: none;
        user-select: none;
    }
`;

export default GlobalStyle;
