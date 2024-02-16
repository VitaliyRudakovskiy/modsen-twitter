import styled from 'styled-components';

import { flexCenter } from '@/theme/style/mixins';

export const ToggleContainer = styled.div`
  ${flexCenter};
  position: relative;
  width: ${({ theme }) => theme.sizes.px60};
  height: ${({ theme }) => theme.sizes.px32};
`;

export const Label = styled.label`
  position: absolute;
  width: ${({ theme }) => theme.sizes.full};
  height: ${({ theme }) => theme.sizes.full};
  background-color: ${({ theme }) => theme.togglerColor};
  border-radius: ${({ theme }) => theme.sizes.px32};
  cursor: pointer;
`;

export const Slider = styled.span`
  position: absolute;
  width: ${({ theme }) => theme.sizes.full};
  height: ${({ theme }) => theme.sizes.full};
  border-radius: ${({ theme }) => theme.sizes.px32};
  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0.25rem;
    left: 0.3rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    box-shadow: inset 8px -3px 0px 0px yellow;
    transition: 0.3s;
  }
`;

export const Input = styled.input`
  position: absolute;
  display: none;

  &:checked ~ ${Slider}::before {
    transform: translateX(1.7rem);
    background-color: ${({ theme }) => theme.sliderColor};
    box-shadow: none;
  }
`;
