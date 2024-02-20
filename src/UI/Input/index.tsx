import { forwardRef } from 'react';

import StyledInput from './styled';
import { IInputProps } from './types';

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, type = 'text', autoComplete = true, ...props }, ref) => (
    <StyledInput
      placeholder={placeholder}
      ref={ref}
      type={type}
      autoComplete={autoComplete ? 'on' : 'off'}
      {...props}
    />
  )
);

export default Input;
