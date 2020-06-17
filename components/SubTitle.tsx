import styled from 'styled-components';
import { FC, HTMLAttributes } from 'react';

const StyleSubTitle = styled.h1`
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 15px 0;
`;

const SubTitle: FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  return <StyleSubTitle {...props}>{props.children}</StyleSubTitle>;
};

export default SubTitle;
