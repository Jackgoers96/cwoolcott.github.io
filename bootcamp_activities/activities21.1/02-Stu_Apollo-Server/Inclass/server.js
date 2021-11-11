const express = require('express');

// Importing ApolloServer
const { ApolloServer } = require('apollo-server-express');

// Importing the two parts GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// New Instance of the ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Updating Express.js to ApolloServer
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
