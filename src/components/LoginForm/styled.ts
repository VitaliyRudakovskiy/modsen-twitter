import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xl};
  width: ${({ theme }) => theme.sizes.full};
  max-width: ${({ theme }) => theme.sizes.px550};
  padding: 0 ${({ theme }) => theme.gaps.xl5};
`;

export const LoginTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl2}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.l};
`;

export const LoginInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.m};
  width: ${({ theme }) => theme.sizes.full};
`;

export const SignupLink = styled(Link)`
  display: flex;
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  margin-top: ${({ theme }) => theme.gaps.l};
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
`;
