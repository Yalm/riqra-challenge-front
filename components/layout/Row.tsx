import styled from 'styled-components';
import { HTMLAttributes, FC } from 'react';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'flex';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'start' | 'center' | 'end';
}

const StyleRow = styled.div<RowProps>`
  display: ${props => props.type || 'flex'};
  justify-content: ${props => props.justify || 'start'};
  align-items: ${props => props.align || 'start'};
  flex-wrap: wrap;
`;

const Row: FC<RowProps> = props => {
  return <StyleRow {...props}>{props.children}</StyleRow>;
};

export default Row;
