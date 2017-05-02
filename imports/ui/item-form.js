import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }
  render() {
    const { submit } = this.props
    return (
      <div>
        <input type='text' value={this.state.text} onChange={(e) => {
          this.state.text = e.target.value
          this.setState(this.state)
        }}/>
        <button type="button" className='btn btn-block' onClick={() => {
          submit({text: this.state.text})
          this.state.text = ""
          this.setState(this.state)
        }}>Submit</button>
      </div>
    )
  }
}
const addItem = gql`
  mutation addItem($text:String!) {
  addItem(text: $text) {
    _id,
    text
  }
}
`;
//
export default graphql(addItem, {
  props: ({ ownProps, mutate }) => ({
    submit: ({ text }) => {
      console.log('submit text', text);
      mutate({
        variables: { text },
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

    },
  }),
})(ItemForm);
