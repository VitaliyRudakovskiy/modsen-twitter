import { flexCenter } from '@theme/style/mixins';
import styled from 'styled-components';

export const ModalOverlay = styled.section`
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  position: relative;
  width: 500px;
  padding: 40px ${({ theme }) => theme.gaps.l} 20px;
  border-radius: ${({ theme }) => theme.gaps.m};
  box-shadow: ${({ theme }) => theme.textColor} 0 6px 10px -2px;
  background: ${({ theme }) => theme.textColor};
`;

export const CloseButton = styled.button`
  font-size: 50px;
  position: absolute;
  top: -5px;
  right: 8px;
  background: none;
  border: none;
  color: green;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const ModalTitle = styled.h2``;

export const ModalForm = styled.form``;

export const InputsWrapper = styled.div``;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.orange};
`;
