import ButtonVariants from '@constants/buttonVariants';
import { DefaultTheme } from 'styled-components';

const lightBlue = ({ theme }: DefaultTheme) => theme.colors.blue100;
const black = ({ theme }: DefaultTheme) => theme.colors.black300;
const gray = ({ theme }: DefaultTheme) => theme.colors.gray400;
const white = ({ theme }: DefaultTheme) => theme.colors.white100;
const secondaryColor = ({ theme }: DefaultTheme) => theme.secondaryColor;
const secondaryBackgroundColor = ({ theme }: DefaultTheme) =>
  theme.secondaryBackgroundColor;

export const defineBackgroundColor = (variant: string, disabled: boolean) => {
  switch (true) {
    case disabled:
    case variant === ButtonVariants.primary:
      return lightBlue;
    case variant === ButtonVariants.secondary:
      return secondaryBackgroundColor;
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
      return secondaryColor;
    default:
      return white;
  }
};
