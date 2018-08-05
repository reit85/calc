const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const ArticleType = require('./ArticleType');
const SupplierType = require('./SupplierType');
const ArticleModel = mongoose.model('ArticleModel');
const SupplierModel = mongoose.model('SupplierModel');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    supplier: {
      type: SupplierType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return SupplierModel.findById(args.id)
      }
    },
    suppliers: {
      type: new GraphQLList(SupplierType),
      resolve(parent, args){
        return SupplierModel.find({})
      }
    },
    article: {
      type: ArticleType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return ArticleModel.findById(args.id)
      }
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parent, args){
        return ArticleModel.find({})
      }
    }
  }
})

module.exports = RootQueryType;