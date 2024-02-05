import { DefaultTheme } from 'styled-components';

import COLORS from './style/colors';
import FONTS from './style/fonts';
import GAPS from './style/gaps';
import SIZES from './style/sizes';

const BASE_THEME = {
  colors: {
    ...COLORS,
  },
  fonts: {
    ...FONTS,
  },
  gaps: {
    ...GAPS,
  },
  sizes: {
    ...SIZES,
  },
};

export const lightTheme: DefaultTheme = {
  ...BASE_THEME,

  backgroundColor: COLORS.white100,
  textColor: COLORS.black300,
  togglerColor: COLORS.gray200,
  sliderColor: COLORS.gray400,
  inputColor: COLORS.white100,
  inputBorderColor: COLORS.gray300,
  inputPlaceholder: COLORS.gray400,
};

export const darkTheme: DefaultTheme = {
  ...BASE_THEME,

  backgroundColor: COLORS.black100,
  textColor: COLORS.white100,
  togglerColor: COLORS.gray500,
  sliderColor: COLORS.gray600,
  inputColor: COLORS.gray600,
  inputBorderColor: COLORS.black100,
  inputPlaceholder: COLORS.gray400,
};
