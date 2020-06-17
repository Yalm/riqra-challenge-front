import { HTMLAttributes } from 'react';
import { CartItem } from './cart-items';

export interface CartItemProps extends HTMLAttributes<HTMLDivElement> {
  product: CartItem;
  isInCart?: boolean;
}
