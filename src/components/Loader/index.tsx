import ThemeProvider from '@/providers/ThemeProvider';

import { LoaderContainer, Particle, Roller } from './styled';

const Loader = () => {
  return (
    <ThemeProvider>
      <LoaderContainer>
        <Roller>
          <Particle />
          <Particle />
          <Particle />
          <Particle />
          <Particle />
          <Particle />
          <Particle />
          <Particle />
        </Roller>
      </LoaderContainer>
    </ThemeProvider>
  );
};

export default Loader;
