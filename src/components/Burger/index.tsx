import {
  BottomBurgerLine,
  BurgerIconWrapper,
  MiddleBurgerLine,
  TopBurgerLine,
} from './styled';
import { IBurgerProps } from './types';

const Burger = ({ isOpen, onClick }: IBurgerProps) => {
  return (
    <BurgerIconWrapper $isOpen={isOpen} onClick={onClick}>
      <TopBurgerLine $isOpen={isOpen} />
      <MiddleBurgerLine $isOpen={isOpen} />
      <BottomBurgerLine $isOpen={isOpen} />
    </BurgerIconWrapper>
  );
};

export default Burger;
