import ButtonVariants from '@constants/buttonVariants';
import { DefaultTheme } from 'styled-components';

const lightBlue = ({ theme }: DefaultTheme) => theme.colors.blue100;
const black = ({ theme }: DefaultTheme) => theme.colors.black300;
const gray = ({ theme }: DefaultTheme) => theme.colors.gray400;
const white = ({ theme }: DefaultTheme) => theme.colors.white100;
const secondaryColor = ({ theme }: DefaultTheme) => theme.secondaryColor;
const secondaryBackgroundColor = ({ theme }: DefaultTheme) =>
  theme.secondaryBackgroundColor;

const textXL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.xl;
const textL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.l;
const textS = ({ theme }: DefaultTheme) => theme.fonts.fontSize.s;

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

export const defineTextSize = (variant: string) => {
  switch (true) {
    case variant === ButtonVariants.follow:
      return textS;
    case variant === ButtonVariants.secondary:
      return textXL;
    default:
      return textL;
  }
};
