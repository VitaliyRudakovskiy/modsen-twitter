import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarWrapper = styled.section<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: ${({ theme }) => theme.sizes.px230};

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    width: ${({ theme }) => theme.sizes.full};
    background-color: ${({ theme }) => theme.backgroundColor};
    position: fixed;
    top: 0;
    left: ${({ theme, $isOpen }) =>
      $isOpen ? theme.gaps.m : `-${theme.sizes.px300}`};
    height: ${({ theme }) => theme.sizes.vh100};
    padding: ${({ theme }) => theme.gaps.xl7} ${({ theme }) => theme.gaps.xl2}
      20px 0;
    transition: all 0.3s ease-out;
    overflow: auto;
    z-index: 3;
  }
`;

export const SidebarLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.s};
  margin-bottom: ${({ theme }) => theme.gaps.xl2};

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    margin-bottom: ${({ theme }) => theme.gaps.m};
    gap: ${({ theme }) => theme.gaps.xs};
  }
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
  gap: ${({ theme }) => theme.gaps.l};
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.blue300};
  }
`;

export const SidebarLinkImage = styled.img`
  width: ${({ theme }) => theme.gaps.xl2};
`;

export const TwitterIcon = styled.img`
  width: ${({ theme }) => theme.gaps.xl4};
  margin-bottom: ${({ theme }) => theme.gaps.xl2};

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    display: none;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gaps.xs};
  margin: ${({ theme }) => theme.gaps.xl} 0;

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    margin: ${({ theme }) => theme.gaps.m} 0;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xs2};
  font-size: ${({ theme }) => theme.fonts.fontSize.xs}px;
`;

export const Avatar = styled.img`
  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    display: none;
  }
`;

export const ProfileName = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.l};
`;

export const ProfileEmail = styled.p`
  color: ${({ theme }) => theme.profileEmailColor};
`;
