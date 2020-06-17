import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    cartItems: [Product]!
  }
  extend type Mutation {
    addToCart(product: Product!): [Product]
    removeFromCart(product: Product!): [Product]
    addOrRemoveFromCart(product: Product!, action: String!): [Product]
  }
`;

export default typeDefs;
