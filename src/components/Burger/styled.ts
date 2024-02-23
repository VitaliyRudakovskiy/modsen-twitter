import styled from 'styled-components';

import { flexBetween } from '@/theme/style/mixins';

export const BurgerIconWrapper = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.sizes.px850}) {
    position: fixed;
    left: ${({ theme }) => theme.gaps.xl};
    top: ${({ theme }) => theme.gaps.l};
    ${flexBetween};
    flex-direction: column;
    width: ${({ theme }) => theme.gaps.xl2};
    height: ${({ theme }) => theme.gaps.l};
    cursor: pointer;
    z-index: 5;
  }
`;

const BurgerLine = styled.div`
  width: ${({ theme }) => theme.sizes.full};
  height: 3px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.textColor};
  transition: all 0.3s ease;
`;

export const TopBurgerLine = styled(BurgerLine)<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'none')};
  transform-origin: bottom left;
`;

export const MiddleBurgerLine = styled(BurgerLine)<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
`;

export const BottomBurgerLine = styled(BurgerLine)<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(315deg)' : 'none')};
  transform-origin: bottom left;
  margin-bottom: ${({ $isOpen }) => ($isOpen ? '-4px' : '0')};
  margin-left: ${({ $isOpen }) => ($isOpen ? '2px' : '0')};
`;
