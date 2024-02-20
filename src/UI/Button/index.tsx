import { ButtonIcon, StyledButton } from './styled';
import { IButtonProps } from './types';

const Button = ({
  icon,
  variant,
  children,
  disabled = false,
  type = 'button',
  width = '100%',
  onClick,
  dataCy = '',
}: IButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $width={width}
      disabled={disabled}
      type={type}
      onClick={onClick}
      data-cy={dataCy}
    >
      {icon && <ButtonIcon src={icon} alt='button icon' />}
      {children}
    </StyledButton>
  );
};

export default Button;
