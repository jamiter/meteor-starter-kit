import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { pubsub, USER_CHANGE_CHANNEL } from './pubsub';

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

type Subscription {
  userChange: User
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
  Subscription: {
    userChange: {
      subscribe: () => pubsub.asyncIterator(USER_CHANGE_CHANNEL),
    },
  },
  User: {
    emails: ({ emails }) => emails,
    randomString: () => Random.id(),
  },
};
