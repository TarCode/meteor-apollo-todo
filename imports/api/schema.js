export const typeDefs = [
`
type Item {
  text: String,
  _id: String
}

type Query {
  items: [Item]
}
`,
];

export const resolvers = {
  Query: {
    items(root, args, context) {
      return context.items;
    },
  }
};
