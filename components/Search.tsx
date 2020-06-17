import styled from 'styled-components';
import { HTMLAttributes, FC, ChangeEvent } from 'react';
import { GET_FILTER } from '../gql/queries';
import { useQuery, useApolloClient } from '@apollo/react-hooks';

const StyleSearch = styled.input`
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  min-height: 40px;
  padding: 0px 10px;
  box-sizing: border-box;
`;

const Search: FC<HTMLAttributes<HTMLInputElement>> = props => {
  const { data } = useQuery(GET_FILTER);
  const client = useApolloClient();

  const handleChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>) => {
    client.writeData({ data: { filter: value } });
  };

  return (
    <StyleSearch
      {...props}
      aria-label="search"
      placeholder="Search Products"
      value={data?.filter}
      onChange={handleChange}
    />
  );
};

export default Search;
