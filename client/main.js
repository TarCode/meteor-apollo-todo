import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import Routes from './routes'

const client = new ApolloClient(meteorClientConfig());

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>,
    document.getElementById('app')
  );
});
