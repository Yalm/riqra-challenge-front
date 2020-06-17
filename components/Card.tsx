import styled, { css } from 'styled-components';
import { CardProps } from '../interfaces/card-pops';
import { FC } from 'react';

const StyleCard = styled.div<CardProps>`
  background-color: #ffffff;
  border-radius: 4px;
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
    ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};
`;

const Card: FC<CardProps> = props => {
  return <StyleCard {...props}>{props.children}</StyleCard>;
};

export default Card;
