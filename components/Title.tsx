import styled from 'styled-components';
import { FC,HTMLAttributes } from 'react';

const StyleTitle = styled.h1`
  font-size: 28px;
  line-height: 42px;
`;

const Title: FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  return <StyleTitle {...props}>{props.children}</StyleTitle>;
};

export default Title;
