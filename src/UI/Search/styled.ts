import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.s};
  width: 100%;
  padding: ${({ theme }) => theme.gaps.m};
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.searchColor};
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  border-radius: ${({ theme }) => theme.sizes.px32};
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue200};
  }
`;

export const SearchInput = styled.input`
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  width: 90%;
  color: inherit;
  background-color: inherit;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
  }

  &:active,
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue200};
  }
`;

export const SearchIcon = styled.img`
  height: ${({ theme }) => theme.sizes.px32};
  width: ${({ theme }) => theme.sizes.px32};
  transition: inherit;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
