import ICONS from '@/constants/icons';

const defineLikeIcon = (isLiked: boolean) =>
  isLiked ? ICONS.likeFill : ICONS.likeOutline;

export default defineLikeIcon;
