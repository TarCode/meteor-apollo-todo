import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Header from './header'
import Loading from './loading'

export const App = (props) => {
  return (
   <div className="App">
     <Header/>
     <div className="container">
       { props.children }
     </div>
   </div>
 )
}
