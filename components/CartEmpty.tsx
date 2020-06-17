import styled from 'styled-components';
import { FC } from 'react';
import ShoppingBasketIcon from './icons/ShoppingBasket';

const StyleCartEmpty = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  h1 {
    margin-bottom: 5px;
  }
`;

const CartEmpty: FC = props => {
  return (
    <StyleCartEmpty {...props}>
      <ShoppingBasketIcon />
      <h1>Your cart is empty</h1>
      <div>
        <p className="m-0">Seems like you haven’t chosen</p>
        <p className="m-0">what to buy...</p>
      </div>
    </StyleCartEmpty>
  );
};

export default CartEmpty;
