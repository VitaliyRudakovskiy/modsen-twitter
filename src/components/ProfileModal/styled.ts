import styled from 'styled-components';

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
