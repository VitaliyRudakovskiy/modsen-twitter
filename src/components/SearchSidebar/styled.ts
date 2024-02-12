import styled from 'styled-components';

export const SearchSidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.l};
  max-width: ${({ theme }) => theme.sizes.px400};
  padding: 0 ${({ theme }) => theme.gaps.s};
`;

export const MemesImage = styled.img`
  margin-top: ${({ theme }) => theme.gaps.s};
  width: ${({ theme }) => theme.sizes.full};
`;

export const RecommendationsTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ theme }) => theme.fonts.fontSize.xl2}px;
`;

export const ShowMoreButton = styled.span`
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
`;
