import styled from 'styled-components';

const StyleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  min-height: 48px;
  text-transform: uppercase;
  &:disabled {
    background-color: transparent;
    border-color: #dddddd;
    color: #c1c1c1;
  }
`;

const Button: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = props => {
  return <StyleButton {...props}>{props.children}</StyleButton>;
};

export default Button;
