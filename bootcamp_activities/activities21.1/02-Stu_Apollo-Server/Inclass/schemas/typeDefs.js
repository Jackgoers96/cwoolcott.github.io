const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Defining fields / whats available 
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # Defining what we can query
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
