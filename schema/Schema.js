const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./RootQueryType');

module.exports = new GraphQLSchema({
  query: RootQueryType
});