const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const app = express();

app.use(bodyParser.json());

const server = new ApolloServer({
  //introspection: By Default/Should be False in Prod
  introspection: true,
  typeDefs,
  resolvers,
  //Provide this function to transform the structure of error objects before they're sent to a client. 
  //The function takes a GraphQLError object and should return a GraphQLFormattedError object.
  formatError: (error) => error,
  //The context argument is useful for passing things that any resolver might need, 
  //like authentication scope, database connections, and custom fetch functions. 
  //https://www.apollographql.com/docs/apollo-server/data/resolvers/#the-context-argument
  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, () => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at http://localhost:4000/graphql
  `);
});
