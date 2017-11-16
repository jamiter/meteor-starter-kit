# Meteor + Apollo boilerplate

A simple kit to start experimenting with Apollo, Meteor and React.

### Includes
- GraphQL being loaded via DDP
- Apollo client
- React
- Accounts UI, Basic & password
- ES6 syntax

Check `package.json` for specific versions

### Running it

```
meteor npm install
meteor
```

### Folder structure
    .
    ├── client                  # Client files
    │   ├── styles              # Styles
    │   ├── main.html           # First loaded view pulling from imports
    │   └── main.js             # Imports all required files - React render
    ├── imports                 # A client/server folder
    │   ├── api                 #
    │   |  └── schema.js        # Schema & query definitions
    |   └── ui                  # UI React rendering
    │      └── App.js           # Component using `graphql` HOC
    │      └── Header.js        # Basic presentational component
    │      └── Loading.js       # Reusable loading component
    │      └── LoginForm.js     # Component using `withApollo` HOC
    ├── server                  # Server files
    │   └── server.js           # Main server file initiating DDP Apollo
    └── package.json            # node dependencies


### Learn more

- [Meteor `swydo:ddp-apollo` package docs](https://github.com/Swydo/ddp-apollo/blob/master/README.md)
- [Apollo docs](http://dev.apollodata.com/)
