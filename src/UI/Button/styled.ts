import ButtonVariants from '@constants/buttonVariants';
import { flexCenter } from '@theme/style/mixins';
import styled from 'styled-components';

import { defineBackgroundColor, defineColor, defineTextSize } from './helpers';
import { IStyledButtonProps } from './types';

export const StyledButton = styled.button<IStyledButtonProps>`
  ${flexCenter};
  gap: ${({ theme }) => theme.gaps.xs2};
  width: ${({ $width }) => $width};
  max-height: ${({ theme }) => theme.gaps.xl7};
  font-family: ${({ theme, $variant }) =>
    $variant === ButtonVariants.secondary
      ? theme.fonts.fontFamily.roboto
      : theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ $variant }) => defineTextSize($variant)}px;
  font-weight: ${({ theme, $variant }) =>
    $variant === ButtonVariants.secondary
      ? theme.fonts.fontWeight.m
      : theme.fonts.fontWeight.l};
  padding: ${({ theme, $variant }) =>
      $variant === ButtonVariants.follow ? theme.gaps.xs : theme.gaps.l}
    0;
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
  width: ${({ theme }) => theme.gaps.xl};
  height: ${({ theme }) => theme.gaps.xl};
`;
