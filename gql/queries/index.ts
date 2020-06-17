import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
  query Products($findOptions: FindOptionsInput!) {
    productFindAll(findOptions: $findOptions) {
      id
      name
      picture
      price
    }
  }
`;

export const GET_FILTER = gql`
  {
    filter @client
  }
`;

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

export const CHECKOUT = gql`
  mutation checkout($order: OrderInput!) {
    checkout(order: $order) {
      id
    }
  }
`;