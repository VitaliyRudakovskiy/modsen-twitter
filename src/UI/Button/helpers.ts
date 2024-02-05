import ButtonVariants from '@constants/buttonVariants';
import { DefaultTheme } from 'styled-components';

const lightBlue = ({ theme }: DefaultTheme) => theme.colors.blue100;
const lightGray = ({ theme }: DefaultTheme) => theme.colors.gray100;
const black = ({ theme }: DefaultTheme) => theme.colors.black300;
const gray = ({ theme }: DefaultTheme) => theme.colors.gray400;
const white = ({ theme }: DefaultTheme) => theme.colors.white100;

export const defineBackgroundColor = (variant: string, disabled: boolean) => {
  switch (true) {
    case disabled:
    case variant === ButtonVariants.primary:
      return lightBlue;
    case variant === ButtonVariants.secondary:
      return lightGray;
    case variant === ButtonVariants.follow:
      return black;
    default:
      return gray;
  }
};

export const defineColor = (variant: string, disabled: boolean) => {
  switch (true) {
    case disabled:
    case variant === ButtonVariants.primary:
    case variant === ButtonVariants.follow:
      return white;
    case variant === ButtonVariants.secondary:
      return black;
    default:
      return white;
  }
};
