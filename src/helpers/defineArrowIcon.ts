import ICONS from '@/constants/icons';

const defineArrowIcon = (theme: 'dark' | 'light') => {
  return theme === 'light' ? ICONS.arrowDown : ICONS.arrowDownDark;
};

export default defineArrowIcon;
