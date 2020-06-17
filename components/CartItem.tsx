import styled from 'styled-components';
import { FC } from 'react';
import { CartItemProps } from '../interfaces/car-items-props';
import Quantity from './quantity';

const StyleCartItem = styled.div`
  background-color: #ffffff;
  display: flex;
  padding: 16px 16px 15px 16px;
  border-bottom: 1px solid #dddddd;
  position: relative;
  img {
    width: 80px;
    height: 74px;
    object-fit: cover;
  }
  .description {
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ml-auto {
    margin: auto 0 auto auto;
    /* position: relative; */
  }
  h2 {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
  span {
    font-weight: 600;
    font-size: 21.3333px;
    line-height: 32px;
  }
`;

const CartItem: FC<CartItemProps> = ({ product, isInCart }) => {
  return (
    <StyleCartItem>
      <img src={product.picture} alt={product.name} />
      <div className="description">
        <h2>{product.name}</h2>
        <span className="text-danger">$ {product.price}</span>
      </div>
      <Quantity className="ml-auto" isInCart={isInCart} product={product} />
    </StyleCartItem>
  );
};

export default CartItem;
