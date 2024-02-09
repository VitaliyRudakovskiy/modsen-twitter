import { ReactNode } from 'react';
import ButtonVariants from '@constants/buttonVariants';

export type IButtonProps = {
  icon?: string;
  variant: ButtonVariants;
  children: string | ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  width?: string;
  onClick?: () => void;
};

export type IStyledButtonProps = {
  $variant: ButtonVariants;
  $width: string;
  disabled: boolean;
};
