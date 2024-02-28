import darkBackground from '@/assets/images/dark.webp';
import lightBackground from '@/assets/images/light.webp';

const defineProfileBackground = (theme: 'dark' | 'light') => {
  return theme === 'dark' ? darkBackground : lightBackground;
};

export default defineProfileBackground;
