const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const SupplierType = require('./SupplierType')
const SupplierModel = require('../models/SupplierModel')

const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  fields: () => ({
    id: {type: GraphQLID},
    supplierId: {type: GraphQLID},
    nameDe: {type: GraphQLString},
    nameEn: {type: GraphQLString},
    descriptionDe: {type: GraphQLString},
    descriptionEn: {type: GraphQLString},
    category: {type: GraphQLString},
    priceType: {type: GraphQLString},
    price: {type: GraphQLInt},
    supplier: {
      type: SupplierType,
      resolve(parent, args){
        return SupplierModel.findById(parent.supplierId)
      }
    }
  })
})

module.exports = ArticleType