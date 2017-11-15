import { Meteor } from 'meteor/meteor';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();
export const USER_CHANGE_CHANNEL = 'USER_RANDOM_CHANGE';

/*
 * Generate a user change event every second to demonstrate possible updates coming from the server.
 * Normally this would happen in a mutation for instance.
 */
Meteor.setInterval(
  () => {
    pubsub.publish(USER_CHANGE_CHANNEL, {
      userChange: Meteor.users.findOne(),
    });
  },
  1000
);
