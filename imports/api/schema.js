import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

export const typeDefs = [
  `
type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
  randomString: String
  _id: String
}

type Query {
  user: User
}
`,
];

export const resolvers = {
  Query: {
    user(root, args, context) {
      /*
       * We access to the current user here thanks to the context. The current
       * userId is added to the context thanks to the `meteor/swydo:ddp-apollo` package.
       */
      return Meteor.users.findOne(context.userId);
    },
  },
  User: {
    emails: ({ emails }) => emails,
    randomString: () => Random.id(),
  },
};
