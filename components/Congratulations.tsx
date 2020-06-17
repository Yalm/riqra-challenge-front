import styled from 'styled-components';
import { FC } from 'react';

const StyleCongratulations = styled.div`
  height: calc(100vh - 16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Congratulations: FC = props => {
  return (
    <StyleCongratulations {...props}>{props.children}</StyleCongratulations>
  );
};

export default Congratulations;
