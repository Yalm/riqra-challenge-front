import styled from 'styled-components';
import { HTMLAttributes, FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_FILTER, GET_CART_ITEMS, PRODUCTS_QUERY } from '../gql/queries';
import CartItem from './CartItem';
import { CartItem as Item } from '../interfaces/cart-items';
import CartEmpty from './CartEmpty';

const StyleCart = styled.div`
  height: calc(100vh - 76px);
  overflow: auto;
  position: relative;
`;

interface ProductData {
  productFindAll: Item[];
}

interface ProductVars {
  findOptions?: {
    search: string;
  };
}

const Cart: FC<HTMLAttributes<HTMLDivElement>> = props => {
  const { data: search } = useQuery(GET_FILTER);
  const { data: cart } = useQuery<{
    cartItems: Item[];
  }>(GET_CART_ITEMS);

  const { data, loading, error } = useQuery<ProductData, ProductVars>(
    PRODUCTS_QUERY,
    {
      variables: { findOptions: { search: search?.filter } }
    }
  );

  if (error)
    return (
      <StyleCart {...props}>
        <h1>Error</h1>
      </StyleCart>
    );
  if (loading)
    return (
      <StyleCart {...props}>
        <h1>Loading...</h1>
      </StyleCart>
    );

  return (
    <StyleCart {...props}>
      {!search.filter && !cart?.cartItems.length && <CartEmpty />}
      {search.filter
        ? data?.productFindAll.map(item => (
            <CartItem product={item} key={item.id} />
          ))
        : cart?.cartItems.map(item => (
            <CartItem product={item} key={item.id} isInCart={true} />
          ))}
    </StyleCart>
  );
};

export default Cart;
