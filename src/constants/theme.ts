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

  full: '100%',
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
