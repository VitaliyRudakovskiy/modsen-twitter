import COLORS from './style/colors';
import FONTS from './style/fonts';
import GAPS from './style/gaps';

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
};

const THEME = {
  light: {
    ...BASE_THEME,

    backgroundColor: COLORS.white100,
    textColor: COLORS.black300,
  },
  dark: {
    ...BASE_THEME,

    backgroundColor: COLORS.black100,
    textColor: COLORS.white100,
  },
};

export default THEME;
