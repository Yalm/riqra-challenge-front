import styled from 'styled-components';
import { FC, HTMLAttributes } from 'react';
import CartIcon from './icons/Cart';

const StyleDeliveryDate = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg,
  span,
  strong {
    margin: 5px;
  }
`;

const DeliveryDate: FC<HTMLAttributes<HTMLDivElement>> = props => {
  const date = () => {
    const currentDate = new Date();
    switch (currentDate.getDay()) {
      case 5:
        currentDate.setDate(currentDate.getDate() + 3);
        break;
      case 6:
        currentDate.setDate(currentDate.getDate() + 2);
        break;
      default:
        currentDate.setDate(currentDate.getDate() + 1);
        break;
    }

    return currentDate.toLocaleDateString();
  };

  return (
    <StyleDeliveryDate {...props}>
      <CartIcon />
      <span>Buy now and get it by </span>
      <strong>{date()}</strong>
    </StyleDeliveryDate>
  );
};

export default DeliveryDate;
