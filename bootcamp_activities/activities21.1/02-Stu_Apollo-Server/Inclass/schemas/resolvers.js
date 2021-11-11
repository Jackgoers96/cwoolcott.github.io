const { Class } = require('../models');

// Create the functions that deliver the queries defined in typeDef
const resolvers = {
  Query: {
    classes: async () => {
      // returning all the data from Class 
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
