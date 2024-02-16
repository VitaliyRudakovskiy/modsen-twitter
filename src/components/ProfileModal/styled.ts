import styled from 'styled-components';

import { flexCenter } from '@/theme/style/mixins';

export const ModalOverlay = styled.section`
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ theme }) => theme.sizes.vh100};
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  position: relative;
  width: ${({ theme }) => theme.sizes.vw90};
  max-width: ${({ theme }) => theme.sizes.px550};
  padding: ${({ theme }) => theme.gaps.xl4} ${({ theme }) => theme.gaps.l} 20px;
  border-radius: ${({ theme }) => theme.gaps.m};
  box-shadow: ${({ theme }) => theme.backgroundColor} 5px 5px 17px 5px;
  background-color: ${({ theme }) => theme.modalColor};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.gaps.m};
  font-size: ${({ theme }) => theme.fonts.fontSize.xl3}px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.orange};
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ theme }) => theme.fonts.fontSize.xl2}px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: ${({ theme }) => theme.gaps.m};
  letter-spacing: 1.5px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.full};
`;

export const InputsWrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xs2};
  margin-bottom: ${({ theme }) => theme.gaps.s};

  &:last-child {
    margin-bottom: ${({ theme }) => theme.gaps.xl2};
  }
`;

export const InputLabel = styled.p`
  color: ${({ theme }) => theme.textColor};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.orange};
`;
