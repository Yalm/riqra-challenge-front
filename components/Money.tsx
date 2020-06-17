import styled from 'styled-components';
import { FC } from 'react';

const StyleMoney = styled.p`
  margin: 0;
`;

const Money: FC<{ value: number; prefix: string }> = props => {
  return (
    <StyleMoney {...props}>
      {props.prefix} {props.value.toFixed(2)}
    </StyleMoney>
  );
};

export default Money;
