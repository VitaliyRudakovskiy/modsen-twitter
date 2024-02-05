import styled, { css } from 'styled-components';

import { IArrowStyledProps, IStyledsSelectProps } from './types';

export const StyledSelectContainer = styled.div<IStyledsSelectProps>`
  position: relative;
  width: ${({ $width }) => $width};
`;

export const StyledSelect = styled.select`
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  padding: ${({ theme }) => theme.gaps.l};
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  border-radius: ${({ theme }) => theme.sizes.px6};
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.inputColor};
  appearance: none;
  width: 100%;
  cursor: pointer;
`;

export const StyledOption = styled.option``;

export const ArrowImage = styled.img<IArrowStyledProps>`
  position: absolute;
  right: ${({ theme }) => theme.gaps.m};
  top: 43%;
  transition: all 0.3s;

  ${({ $isOpened }) =>
    $isOpened &&
    css`
      transform: rotate(180deg);
    `}
`;
