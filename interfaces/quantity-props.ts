import { HTMLAttributes } from 'react';
import { CartItem } from './cart-items';

export interface QuantityProps extends HTMLAttributes<HTMLButtonElement> {
  product: CartItem;
  isInCart?: boolean;
}
