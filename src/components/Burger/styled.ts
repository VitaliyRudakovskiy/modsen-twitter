import styled from 'styled-components';

import { flexBetween } from '@/theme/style/mixins';
import { max850 } from '@/theme/style/sizes';
import { IIsOpen } from '@/types/form';

export const BurgerIconWrapper = styled.div<IIsOpen>`
  display: none;

  @media (max-width: ${max850}) {
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

export const TopBurgerLine = styled(BurgerLine)<IIsOpen>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'none')};
  transform-origin: bottom left;
`;

export const MiddleBurgerLine = styled(BurgerLine)<IIsOpen>`
  opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
`;

export const BottomBurgerLine = styled(BurgerLine)<IIsOpen>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(315deg)' : 'none')};
  transform-origin: bottom left;
  margin-bottom: ${({ $isOpen }) => ($isOpen ? '-4px' : '0')};
  margin-left: ${({ $isOpen }) => ($isOpen ? '2px' : '0')};
`;
