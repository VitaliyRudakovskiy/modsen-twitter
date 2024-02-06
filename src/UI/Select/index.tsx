import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ICONS from '@constants/icons';
import { selectTheme } from '@store/slices/themeSlice';

import {
  ArrowImage,
  StyledOption,
  StyledSelect,
  StyledSelectContainer,
} from './styled';
import { ISelectProps } from './types';

const Select = ({ placeholder, options, width = '100%' }: ISelectProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const theme = useSelector(selectTheme);
  const selectRef = useRef(null);

  const handleClickOutside = () => {
    if (selectRef.current) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggle: MouseEventHandler<HTMLSelectElement> = (event) => {
    event.stopPropagation();
    setIsOpened((prevOpened) => !prevOpened);
  };

  const Icon = theme === 'light' ? ICONS.arrowDown : ICONS.arrowDownDark;

  return (
    <StyledSelectContainer $width={width}>
      <StyledSelect ref={selectRef} onClick={handleToggle} defaultValue=''>
        <StyledOption value='' disabled>
          {placeholder}
        </StyledOption>

        {options.map((option) => (
          <StyledOption key={option} value={option}>
            {option}
          </StyledOption>
        ))}
      </StyledSelect>
      <ArrowImage src={Icon} alt='dropdown arrow' $isOpened={isOpened} />
    </StyledSelectContainer>
  );
};

export default Select;