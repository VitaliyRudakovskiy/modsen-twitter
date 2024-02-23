import styled from 'styled-components';

export const SearchSidebarContainer = styled.section<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.l};
  width: ${({ theme }) => theme.sizes.full};
  min-width: 300px;
  padding: 0 ${({ theme }) => theme.gaps.s};

  @media (max-width: ${({ theme }) => theme.sizes.px1230}) {
    max-width: 500px;
    background-color: ${({ theme }) => theme.backgroundColor};
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? 0 : '-600px')};
    height: ${({ theme }) => theme.sizes.vh100};
    padding: ${({ theme }) => theme.gaps.xl7} ${({ theme }) => theme.gaps.xl2}
      20px 20px;
    transition: all 0.3s ease-out;
    overflow: auto;
    z-index: 3;
    padding-top: 80px;
  }
`;

export const MemesImage = styled.img`
  margin-top: ${({ theme }) => theme.gaps.s};
  width: ${({ theme }) => theme.sizes.full};

  @media (max-width: ${({ theme }) => theme.sizes.px1230}) {
    display: none;
  }
`;

export const RecommendationsTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ theme }) => theme.fonts.fontSize.xl2}px;
`;

export const ShowMoreLessButton = styled.span`
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
