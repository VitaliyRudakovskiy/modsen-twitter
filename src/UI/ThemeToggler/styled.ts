import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.flex.center};
  width: ${({ theme }) => theme.valueInRem.rem4};
  height: ${({ theme }) => theme.valueInRem.rem2};

  @media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
    width: ${({ theme }) => theme.valueInRem.rem3};
    height: ${({ theme }) => theme.valueInRem.rem1_5};
  }
`;

export const Label = styled.label`
  position: absolute;
  width: ${({ theme }) => theme.valueInPercent.wFull};
  height: ${({ theme }) => theme.valueInPercent.wFull};
  background-color: ${({ theme }) => theme.toggleBackground};
  border-radius: ${({ theme }) => theme.valueInRem.rem2};
  cursor: pointer;
`;

export const Slider = styled.span`
  position: absolute;
  width: ${({ theme }) => theme.valueInPercent.wFull};
  height: ${({ theme }) => theme.valueInPercent.wFull};
  border-radius: ${({ theme }) => theme.valueInRem.rem2};
  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: ${({ theme }) => theme.valueInRem.rem0_3};
    left: ${({ theme }) => theme.valueInRem.rem0_3};
    width: ${({ theme }) => theme.valueInRem.rem1_4};
    height: ${({ theme }) => theme.valueInRem.rem1_4};
    border-radius: 50%;
    box-shadow: inset 8px -3px 0px 0px yellow;
    transition: 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.valueInPx.px768}) {
    &::before {
      top: ${({ theme }) => theme.valueInRem.rem0_2};
      width: ${({ theme }) => theme.valueInRem.rem1_1};
      height: ${({ theme }) => theme.valueInRem.rem1_1};
    }
  }
`;

export const Input = styled.input`
  position: absolute;
  display: none;

  &:checked ~ ${Slider}::before {
    transform: translateX(${({ theme }) => theme.valueInRem.rem2});
    background-color: ${({ theme }) => theme.toggleSliderColor};
    box-shadow: none;
  }

  @media (max-width: ${({ theme }) => theme.valueInPx.px768}) {
    &:checked ~ ${Slider}::before {
      transform: translateX(${({ theme }) => theme.valueInRem.rem1_3});
    }
  }
`;
