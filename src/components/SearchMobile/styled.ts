import styled from 'styled-components';

import { max850, max1230 } from '@/theme/style/sizes';

export const SearchIconWrapper = styled.div`
  display: none;

  @media (max-width: ${max1230}) {
    display: flex;
    position: fixed;
    right: ${({ theme }) => theme.gaps.l};
    top: ${({ theme }) => theme.gaps.xl3};
    width: ${({ theme }) => theme.gaps.xl4};
    height: ${({ theme }) => theme.gaps.xl4};
    cursor: pointer;
    z-index: 5;
    transition: all 0.3s;
  }

  @media (max-width: ${max850}) {
    top: ${({ theme }) => theme.gaps.m};
  }

  &:hover {
    filter: drop-shadow(5px 0 20px hsla(210, 100%, 100%, 0.9));
    transform: scale(1.1);
  }
`;

export const SearchIcon = styled.img``;
