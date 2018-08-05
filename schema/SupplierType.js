const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const ArticleType = require('./ArticleType')
const ArticleModel = require('../models/ArticleModel')

const SupplierType = new GraphQLObjectType({
  name: 'SupplierType',
  fields: () => ({
    id: {type: GraphQLID},
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parent, args){
        return ArticleModel.find({supplierId: parent.id})
      }
    }
  })
})

module.exports = SupplierType