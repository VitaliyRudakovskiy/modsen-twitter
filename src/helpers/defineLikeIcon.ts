import ICONS from '@/constants/icons';

const defineLikeIcon = (isLiked: boolean, theme: 'dark' | 'light') => {
  if (isLiked) return ICONS.likeFill;
  if (theme === 'light') return ICONS.likeOutline;
  return ICONS.likeOutlineDark;
};

export default defineLikeIcon;
