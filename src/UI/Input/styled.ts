import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  padding: ${({ theme }) => theme.gaps.l};
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  border-radius: ${({ theme }) => theme.sizes.px6};
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.inputColor};
  width: ${({ theme }) => theme.sizes.full};
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
  }

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0px 8px 18px -7px rgba(34, 60, 80, 0.26);
    border-color: ${({ theme }) => theme.colors.blue200};
  }
`;

export default StyledInput;
