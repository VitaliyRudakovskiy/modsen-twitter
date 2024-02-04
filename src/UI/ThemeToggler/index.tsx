import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggleTheme } from '@store/slices/themeSlice';

import { Input, Label, Slider, ToggleContainer } from './styled';

const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ToggleContainer>
      <Label>
        <Input
          type='checkbox'
          checked={theme === 'light'}
          onChange={handleToggleTheme}
        />
        <Slider />
      </Label>
    </ToggleContainer>
  );
};

export default ThemeToggler;
