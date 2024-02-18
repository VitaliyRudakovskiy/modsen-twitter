import styled, { createGlobalStyle } from 'styled-components';

import FONTS from './fonts';
import { flexCenter } from './mixins';

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

    body {
        background-color: ${({ theme }) => theme.backgroundColor}
    }
`;

export const LoaderContainer = styled.div`
  ${flexCenter};
  min-height: 100dvh;
`;

export default GlobalStyle;
