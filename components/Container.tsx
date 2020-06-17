import styled, { css } from 'styled-components';
import { CardProps } from '../interfaces/card-pops';
import { FC } from 'react';

const StyleContainer = styled.div<CardProps>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  ${css`
    ${[576, 768, 992, 1200].reduce((query, breakpoint) => {
      query += `@media (min-width: ${breakpoint}px) {
        max-width: ${breakpoint - 60}px;
        } `;
      return query;
    }, '')}
  `}
`;

const Container: FC = props => {
  return <StyleContainer {...props}>{props.children}</StyleContainer>;
};

export default Container;
