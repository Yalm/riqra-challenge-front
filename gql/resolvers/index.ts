import { GET_CART_ITEMS, GET_FILTER } from '../queries';
import { Resolvers } from 'apollo-boost';
import { CartItem } from '../../interfaces/cart-items';

const resolvers: Resolvers = {
  Mutation: {
    addToCart: (_, { product }, { cache }) => {
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });
      const index = cartItems.findIndex(
        (item: CartItem) => item.id === product.id
      );

      cache.writeQuery({ query: GET_FILTER, data: { filter: '' } });

      const data = {
        cartItems:
          index >= 0
            ? cartItems.map((item: CartItem) => {
                if (item.id === product.id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1
                  };
                }
                return item;
              })
            : cartItems.concat([{ ...product, quantity: 1 }])
      };

      cache.writeQuery({ query: GET_CART_ITEMS, data });

      return data.cartItems;
    },
    removeFromCart: (_, { product }, { cache }) => {
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });

      const data = {
        cartItems: cartItems.filter((item: CartItem) => item.id !== product.id)
      };
      cache.writeQuery({ query: GET_CART_ITEMS, data });
      return data.cartItems;
    },
    addOrRemoveFromCart: (_, { product, action }, { cache }) => {
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });

      const data = {
        cartItems: cartItems.map((item: CartItem) => {
          if (item.id === product.id) {
            const quantity = action === 'add' ? item.quantity + 1 : item.quantity - 1;
            return {
              ...item,
              quantity: quantity < 1 ? 1 : quantity
            };
          }
          return item;
        })
      };

      cache.writeQuery({ query: GET_CART_ITEMS, data });
      return data.cartItems;
    }
  }
};

export default resolvers;
