import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import gql from 'graphql-tag';

import ApolloClient from 'apollo-client';
import { DDPLink } from 'meteor/swydo:ddp-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from '/imports/ui/App';

const client = new ApolloClient({
  link: new DDPLink(),
  cache: new InMemoryCache(),
});

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('app')
  );
});

/*
 * We might be interested in updates on the user too, so let's subscribe to it
 * I'm not sure what the best place for this would be, so I'm dumping it here for now
 * A more advanced React developer might be able to help put this where it should
 */
const SUBSCRIBE_USER_RANDOM_CHANGES = gql`
  subscription userChange {
    userChange {
      _id
      randomString
    }
  }
`;

const observer = client.subscribe({
  query: SUBSCRIBE_USER_RANDOM_CHANGES,
});

observer.subscribe({
  next() {
    // We _could_ do stuff with the new user here, but the UI will update automatically anyway!
  },
});
