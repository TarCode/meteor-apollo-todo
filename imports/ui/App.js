import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Header from './Header';
import Loading from './Loading';
import LoginForm from './LoginForm';

const App = ({ data }) => {
  const { items, refetch, loading } = data
  return (
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
}


/*
 * We use `gql` from graphql-tag to parse GraphQL query strings into the standard GraphQL AST
 * See for more information: https://github.com/apollographql/graphql-tag
 */
const GET_USER_DATA = gql`
  query {
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
export default graphql(GET_USER_DATA)(App);
