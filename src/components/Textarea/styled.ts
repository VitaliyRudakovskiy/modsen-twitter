import styled from 'styled-components';

import { IStyledLabelProps } from './types';

export const TextareaWrapper = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.gaps.m};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gaps.m};
  width: ${({ theme }) => theme.sizes.full};
`;

export const Avatar = styled.img``;

export const Area = styled.textarea`
  height: ${({ theme }) => theme.sizes.px90};
  width: ${({ theme }) => theme.sizes.full};
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 15px;
  background: none;
  border: none;
  resize: none;
  transition: all 0.3s linear;

  &::placeholder {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
    color: ${({ theme }) => theme.inputPlaceholder};
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  width: 100%;
`;

export const AreaContainer = styled.div`
  width: ${({ theme }) => theme.sizes.full};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.gaps.s};
  bottom: ${({ theme }) => theme.gaps.xs};
`;

export const UploadFileLabel = styled.label<IStyledLabelProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.s};
  position: absolute;
  bottom: ${({ theme }) => theme.gaps.s};
  left: 80px;

  &::after {
    content: '';
    display: ${({ $fileName }) => ($fileName ? 'block' : 'none')};
  }
`;

export const InputForFile = styled.input`
  position: absolute;
  visibility: hidden;
  width: 0;
  opacity: 0;
`;

export const FileName = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.s}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
  color: ${({ theme }) => theme.textColor};
`;

export const UploadFile = styled.img`
  cursor: pointer;
`;
