import { Items } from './items'

export const typeDefs = [
`
type Item {
  text: String,
  _id: String
}

type Query {
  items: [Item]
}

type Mutation {
  addItem(text: String!): Item,
  removeItem(_id: String!): Item
}
`,
];

export const resolvers = {
  Query: {
    items: (root, args) => {
      return Items.find().fetch()
    }
  },
  Mutation: {
   addItem: (root, args) => {
     const itemId = Items.insert({ text: args.text })
     return Items.findOne(itemId)
   },
   removeItem: (root, args) => {
     return Items.remove({ _id: args._id })
   }
 }
};
