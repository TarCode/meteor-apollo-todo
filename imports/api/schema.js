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
  addItem(text: String!): Item
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
     const data = { text: args.text };
     const itemId = Items.insert(data)
     console.log('args from addItem mutation', itemId);
     return Items.findOne(itemId)
   },
 }
};
