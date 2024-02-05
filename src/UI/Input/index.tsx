import { forwardRef } from 'react';

import StyledInput from './styled';
import { IInputProps } from './types';

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, type = 'text' }, ref) => (
    <StyledInput placeholder={placeholder} type={type} ref={ref} />
  )
);

export default Input;
