import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignupFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xl};
  max-width: ${({ theme }) => theme.sizes.px850};
  padding: 0 ${({ theme }) => theme.gaps.xl6};
`;

export const SignupTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.fontSize.xl2}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.l};
`;

export const SignupInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.m};
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
`;

export const BirthTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.fontFamily.robotoSerif};
  font-size: ${({ theme }) => theme.fonts.fontSize.xl}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.l};
`;

export const BirthText = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize.l}px;
  color: ${({ theme }) => theme.profileEmailColor};
`;

export const SelectsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.l};
`;
