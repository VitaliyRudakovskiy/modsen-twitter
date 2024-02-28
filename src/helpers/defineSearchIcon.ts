import ICONS from '@/constants/icons';

const defineSearchIcon = (theme: 'dark' | 'light') => {
  return theme === 'dark' ? ICONS.searchDark : ICONS.search;
};

export default defineSearchIcon;
