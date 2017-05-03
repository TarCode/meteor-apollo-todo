import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from './loading';

const Item = ({ _id, text, remove }) => {
  return (
    <li className='collection-item'>
      {text}
      <i className='material-icons right' onClick={() => remove({ _id })}>clear</i>
    </li>
 )
}

const removeItem = gql`
  mutation removeItem($_id:String!) {
  removeItem(_id: $_id) {
    _id,
    text
  }
}
`;

export default graphql(removeItem, {
  props: ({ ownProps, mutate }) => ({
    remove: ({ _id }) => {
      mutate({
        variables: { _id },
          refetchQueries: [{
            query:  gql`
              query {
                items {
                  _id,
                  text
                }
              }
            `
          }]
      })
      sweetAlert("Item removed!");
    },
  }),
})(Item);
