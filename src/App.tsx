import ButtonVariants from '@constants/buttonVariants';
import ICONS from '@constants/icons';
import ThemeProvider from '@providers/ThemeProvider';
import Button from '@UI/Button';
import Input from '@UI/Input';
import Select from '@UI/Select';
import ThemeToggler from '@UI/ThemeToggler';

import AppContainer from './styled';

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer>
        <ThemeToggler />
        <Input placeholder='Name' />
        <Select
          placeholder='Day'
          options={[
            1219848239, 131212234234, 14234234, 1123242345, 11275089345896,
          ]}
          width='200px'
        />
        <Button width='250px' variant={ButtonVariants.primary}>
          Primary
        </Button>
        <Button width='250px' variant={ButtonVariants.secondary}>
          Secondary
        </Button>
        <Button
          width='250px'
          icon={ICONS.google}
          variant={ButtonVariants.secondary}
        >
          Google
        </Button>
        <Button width='250px' variant={ButtonVariants.follow}>
          Follow
        </Button>
        <Button width='250px' variant={ButtonVariants.primary} disabled>
          Disabled
        </Button>
        <Button width='250px' variant={ButtonVariants.logout}>
          Logout
        </Button>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
