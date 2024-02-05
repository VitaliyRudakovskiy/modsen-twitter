import { ReactNode } from 'react';
import ButtonVariants from '@constants/buttonVariants';

export interface IButtonProps {
  icon?: string;
  variant: ButtonVariants;
  children: string | ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  width?: string;
  onClick?: () => void;
}

export interface IStyledButtonProps {
  $variant: ButtonVariants;
  $width: string;
  disabled: boolean;
}
