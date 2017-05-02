# Todo with Meteor and Apollo

A todo list with GraphQL query and mutation built using the  [Apollo Graphql Meteor Starter Kit](https://github.com/apollographql/meteor-starter-kit)

### Includes
- GraphQL server running with Express bound to the Meteor app using Meteor Mongo for persistence
- Materialize and Material Icons
- Apollo client
- React
- ES6 syntax

Check `package.json` for specific versions

### Running it

```
meteor npm install
meteor
```

GraphiQL is enabled at [/graphiql](http://localhost:3000/graphiql).

### Folder structure
    .
    ├── client                  # Client files
    │   ├── main.html           # First loaded view pulling from imports
    │   └── main.js             # Imports all required files - React render
    ├── imports                 # A client/server folder
    │   ├── api                 # API files
    │   |  └── schema.js        # Schema & query definitions
    │   |  └── items.js         # Mongo Collection for items
    |   └── ui                  # UI React rendering
    │      └── app.js           # Main component
    │      └── header.js        # Materialize Appbar component
    │      └── loading.js       # Reusable loading component
    │      └── item-form.js     # Component for adding items using mutation
    │      └── item-list.js     # Component for getting items using query
    ├── server                  # Server files
    │   └── server.js           # Main server file initiating Apollo server
    └── package.json            # node dependencies


### Learn more

- [Meteor `apollo` package docs](http://dev.apollodata.com/core/meteor.html)
- [Apollo docs](http://dev.apollodata.com/)
