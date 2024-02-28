import {
  forwardRef,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

import defineArrowIcon from '@/helpers/defineArrowIcon';
import { selectTheme } from '@/store/slices/themeSlice';

import {
  ArrowImage,
  StyledOption,
  StyledSelect,
  StyledSelectContainer,
} from './styled';
import { ISelectProps } from './types';

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ placeholder, options, width = '100%', ...props }, ref) => {
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

    return (
      <StyledSelectContainer $width={width}>
        <StyledSelect
          ref={ref}
          onClick={handleToggle}
          defaultValue=''
          {...props}
        >
          <StyledOption value='' disabled>
            {placeholder}
          </StyledOption>

          {options.map((option) => (
            <StyledOption key={option} value={option}>
              {option}
            </StyledOption>
          ))}
        </StyledSelect>
        <ArrowImage
          src={defineArrowIcon(theme)}
          alt='dropdown arrow'
          $isOpened={isOpened}
        />
      </StyledSelectContainer>
    );
  }
);

export default Select;
