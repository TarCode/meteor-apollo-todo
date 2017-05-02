import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Header from './Header';
import Loading from './Loading';
import LoginForm from './LoginForm';

const App = ({ items, refetch, loading }) => (
  <div className="App">
    <Header/>
    <div className="App-block">
      {loading
        ? <Loading />
        : <div className="App-content">
            <LoginForm />
            {
              items && items.length > 0 ?
              items.map((i, index) => (
                <p key={index}>{i.text}</p>
              )) :
              <p>No items yet</p>
            }
          </div>}
    </div>

  </div>
)


/*
 * We use `gql` from graphql-tag to parse GraphQL query strings into the standard GraphQL AST
 * See for more information: https://github.com/apollographql/graphql-tag
 */
const GET_USER_DATA = gql`
  query getItems {
    items {
      _id
      text
    }
  }
`;

/*
 * We use the `graphql` higher order component to send the graphql query to our server
 * See for more information: http://dev.apollodata.com/react/
 */
const withData = graphql(GET_USER_DATA, {
  // destructure the default props to more explicit ones
  props: ({ data: { error, loading, items, refetch } }) => {
    if (loading) return { loading: true };
    if (error) return { hasErrors: true };

    return {
      items: items,
      refetch,
    };
  },
});

export default withData(App);
