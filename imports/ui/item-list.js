import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Header from './Header';
import Loading from './Loading';

const App = ({ data }) => {
  const { items, refetch, loading } = data
  return (
    <div>
      {loading
        ? <Loading />
        : <ul className="collection">
            {
              items && items.length > 0 ?
              items.map((i, index) => (
                <li key={index} className='collection-item'>{i.text}</li>
              )) :
              <li className='collection-item'>No items yet</li>
            }
          </ul>
      }
    </div>
 )
}

const GET_USER_DATA = gql`
  query {
    items {
      _id
      text
    }
  }
`;


export default graphql(GET_USER_DATA)(App);
