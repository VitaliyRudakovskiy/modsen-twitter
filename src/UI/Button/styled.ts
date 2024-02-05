import ButtonVariants from '@constants/buttonVariants';
import { flexCenter } from '@constants/style/mixins';
import styled from 'styled-components';

import { defineBackgroundColor, defineColor } from './helpers';
import { IStyledButtonProps } from './types';

export const StyledButton = styled.button<IStyledButtonProps>`
  ${flexCenter};
  gap: ${({ theme }) => theme.gaps.xs3};
  width: ${({ $width }) => $width};
  max-height: ${({ theme }) => theme.gaps.xl7};
  font-family: ${({ theme, $variant }) =>
    $variant === ButtonVariants.secondary
      ? theme.fonts.fontFamily.roboto
      : theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ theme, $variant }) =>
    $variant === ButtonVariants.secondary
      ? theme.fonts.fontSize.xl
      : theme.fonts.fontSize.l}px;
  font-weight: ${({ theme, $variant }) =>
    $variant === ButtonVariants.secondary
      ? theme.fonts.fontWeight.l
      : theme.fonts.fontWeight.m};
  padding: ${({ theme }) => theme.gaps.l} 0;
  border: ${({ theme, $variant }) =>
    $variant === ButtonVariants.secondary
      ? `1px solid ${theme.colors.gray300}`
      : 'none'};
  border-radius: ${({ theme }) => theme.gaps.xl6};
  background-color: ${({ $variant, disabled }) =>
    defineBackgroundColor($variant, disabled)};
  color: ${({ $variant, disabled }) => defineColor($variant, disabled)};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const ButtonIcon = styled.img`
  width: ${({ theme }) => theme.sizes.px32};
  height: ${({ theme }) => theme.sizes.px32};
`;
