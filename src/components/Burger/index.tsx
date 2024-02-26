import * as Styled from './styled';
import { IBurgerProps } from './types';

const Burger = ({ isOpen, onClick }: IBurgerProps) => {
  return (
    <Styled.BurgerIconWrapper $isOpen={isOpen} onClick={onClick}>
      <Styled.TopBurgerLine $isOpen={isOpen} />
      <Styled.MiddleBurgerLine $isOpen={isOpen} />
      <Styled.BottomBurgerLine $isOpen={isOpen} />
    </Styled.BurgerIconWrapper>
  );
};

export default Burger;
