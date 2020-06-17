import styled from 'styled-components';
import { FC, useState } from 'react';
import { QuantityProps } from '../../interfaces/quantity-props';
import Increment from './Increment';
import PlusIcon from '../icons/Plus';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const StyleQuantity = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  min-width: 48px;
  min-height: 48px;
  color: #ffffff;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  display: block;
`;

const ADD_TO_CART = gql`
  mutation addToCart($product: Product!) {
    addToCart(product: $product) @client
  }
`;

const REMOVE_PRODUCT = gql`
  mutation removeFromCart($product: Product!) {
    removeFromCart(product: $product) @client
  }
`;

const Quantity: FC<QuantityProps> = props => {
  const [open, setOpen] = useState(false);

  const [addToCart] = useMutation(ADD_TO_CART, {
    variables: { product: props.product }
  });

  const [remove] = useMutation(REMOVE_PRODUCT, {
    variables: { product: props.product }
  });

  const destroy = () => {
    remove();
  }

  const openOrClose = () => {
    if (props.isInCart) {
      setOpen(!open);
    } else {
      addToCart();
    }
  };

  return (
    <div className={props.className}>
      <StyleQuantity type="button" onClick={openOrClose}>
        {props.isInCart && open ? props.product.quantity : <PlusIcon />}
      </StyleQuantity>
      {props.isInCart && open && (
        <button className="btn-delete" type="button" onClick={destroy}>
          delete
        </button>
      )}
      {open && <Increment product={props.product} />}
    </div>
  );
};

export default Quantity;
