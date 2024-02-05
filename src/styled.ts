import styled from 'styled-components';

const AppContainer = styled.section`
  min-height: ${({ theme }) => theme.sizes.vh100};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default AppContainer;
