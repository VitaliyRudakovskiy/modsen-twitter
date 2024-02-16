import styled from 'styled-components';

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

export const AreaContainer = styled.div`
  width: ${({ theme }) => theme.sizes.full};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const UploadImage = styled.img`
  cursor: pointer;
`;
