import { setup as createApolloServer } from 'meteor/swydo:ddp-apollo';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs, resolvers } from '/imports/api/schema';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  schema,
});
