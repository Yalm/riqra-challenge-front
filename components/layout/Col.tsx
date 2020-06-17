import styled, { css } from 'styled-components';
import { EnumBreakpoints } from '../../interfaces/breakpoints';
import { ColProps } from '../../interfaces/col-props';

const getWidth = (value: string | number) => {
  return `${(Number(value) * 25) / 6}%`;
};

const StyleCol = styled.div<ColProps>`
  width: 100%;
  ${props =>
    props.span &&
    css`
      width: ${getWidth(props.span)};
    `};
  ${props =>
    css`
      ${Object.keys(EnumBreakpoints).reduce((mediaQueries, size) => {
        if (props[size as keyof ColProps] >= 0) {
          mediaQueries += `
            @media (min-width: ${
              EnumBreakpoints[size as keyof EnumBreakpoints]
            }) {
              width: ${getWidth(props[size as keyof ColProps])};
            }
          `;
        }
        return mediaQueries;
      }, '')}
    `}
`;

const Col: React.FC<ColProps> = props => {
  return <StyleCol {...props}>{props.children}</StyleCol>;
};

export default Col;
