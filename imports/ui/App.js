import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Header from './header'
import Loading from './loading'
import ItemForm from './item-form'
import ItemList from './item-list'

export const App = () => {
  return (
   <div className="App">
     <Header/>
     <div className="container">
       <ItemForm/>
       <ItemList/>
     </div>
   </div>
 )
}
