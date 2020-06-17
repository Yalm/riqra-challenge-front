import styled from 'styled-components';
import { FC } from 'react';
import { GET_CART_ITEMS, CHECKOUT } from '../gql/queries';
import { CartItem } from '../interfaces/cart-items';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Button from './Button';
import Card from './Card';
import Money from './Money';
import Router from 'next/router';

const StyleCartSumary = styled.table`
  width: 100%;
  border-collapse: collapse;
  .text-right {
    text-align: right;
  }
  .shipping {
    background-color: #ffe200;
  }

  td {
    padding: 9px 0px;
    &:last-child {
      padding-top: 11px;
    }
  }
`;

interface CheckoutVars {
  order: {
    products?: CartItem[];
    shipping: number;
    tax: number;
    subtotal: number;
    total: number;
  };
}

const CartSumary: FC = props => {
  const { data: cart } = useQuery<{
    cartItems: CartItem[];
  }>(GET_CART_ITEMS);

  const [checkout, { data: order }] = useMutation<any, CheckoutVars>(CHECKOUT, {
    update(cache) {
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: [] }
      });
    }
  });

  const subtotal = cart
    ? cart.cartItems.reduce(
        (total, item) => (total += item.price * item.quantity),
        0
      )
    : 0;
  const tax = subtotal * 0.18;
  const shipping = subtotal * 0.1;
  const total = subtotal + shipping;

  const payment = async () => {
    try {
      await checkout({
        variables: {
          order: {
            products: cart?.cartItems.map(item => {
              delete item.__typename;
              return item;
            }),
            subtotal: subtotal,
            shipping: shipping,
            tax: tax,
            total: total
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (order) {
    Router.push({
      pathname: '/congratulations',
      query: { id: order.checkout.id }
    });
  }

  const disableButton = total < 50;

  return (
    <>
      <Card padding="16px" className="m-b-4">
        <StyleCartSumary {...props}>
          <tbody>
            <tr>
              <td>Products</td>
              <td className="text-right">
                <Money value={subtotal} prefix="$" />
              </td>
            </tr>
            <tr>
              <td className="shipping">
                <strong>Shipping Cost</strong>
              </td>
              <td className="text-right shipping">
                <Money value={shipping} prefix="$" />
              </td>
            </tr>
            <tr>
              <td>Taxes</td>
              <td className="text-right">
                <Money value={tax} prefix="$" />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td className="text-right text-danger">
                <strong>
                  <Money value={total} prefix="$" />
                </strong>
              </td>
            </tr>
          </tbody>
        </StyleCartSumary>
      </Card>
      <Button disabled={disableButton} className="w-100" onClick={payment}>
        complete order
      </Button>
    </>
  );
};

export default CartSumary;
