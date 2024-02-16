import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const SidebarLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.s};
  margin-bottom: ${({ theme }) => theme.gaps.xl2};
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
    color: ${({ theme }) => theme.colors.pink};
    & > svg > g > path {
      color: ${({ theme }) => theme.colors.white100};
      fill: ${({ theme }) => theme.colors.white100};
    }
  }
`;

export const SidebarLinkImage = styled.img`
  width: ${({ theme }) => theme.gaps.xl2};
`;

export const TwitterIcon = styled.img`
  width: ${({ theme }) => theme.gaps.xl4};
  margin-bottom: ${({ theme }) => theme.gaps.xl2};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gaps.xs};
  margin: ${({ theme }) => theme.gaps.xl} 0;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xs2};
  font-size: ${({ theme }) => theme.fonts.fontSize.xs}px;
`;

export const Avatar = styled.img``;

export const ProfileName = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.l};
`;

export const ProfileEmail = styled.p`
  color: ${({ theme }) => theme.profileEmailColor};
`;
