import styled from 'styled-components';
import { FC } from 'react';
import React from 'react';
import PlusIcon from '../icons/Plus';
import LessIcon from '../icons/Less';
import { QuantityProps } from '../../interfaces/quantity-props';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const StyleIncrement = styled.div`
  position: absolute;
  top: 106px;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 77px;
  padding-top: 29px;
  background-color: rgba(255, 255, 255,0.6);
  .content-increment {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    display: flex;
    width: 180px;
    height: 48px;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    font-size: 21px;
    margin: 0 16px 0 auto;
  }
  button {
    height: 100%;
    min-width: 55px;
  }
`;

const ADD_OR_REMOVE_ITEM = gql`
  mutation addOrRemoveFromCart($product: Product!, $action: String!) {
    addOrRemoveFromCart(product: $product, action: $action) @client
  }
`;

const Increment: FC<QuantityProps> = ({ product, className }) => {
  const [addOrRemove] = useMutation(ADD_OR_REMOVE_ITEM);

  const incrementOrDecrement = (action: string) => {
    addOrRemove({ variables: { product, action } });
  };

  return (
    <StyleIncrement className={className}>
      <div className="content-increment">
        <button type="button" onClick={() => incrementOrDecrement('remove')}>
          <LessIcon />
        </button>
        {product.quantity}
        <button type="button" onClick={() => incrementOrDecrement('add')}>
          <PlusIcon />
        </button>
      </div>
    </StyleIncrement>
  );
};

export default Increment;
