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
        <div className='row'>
          <div className='col s12'>
            <input placeholder="Type an item to add to the list" type='text' value={this.state.text} onChange={(e) => {
              this.state.text = e.target.value
              this.setState(this.state)
            }}/>
          </div>
        </div>
        {
          this.state.text.length > 0 ?
          <div className='row'>
            <div className='col s6'>
              <a type="button" className='green btn btn-block' onClick={() => {
                submit({text: this.state.text})
                this.state.text = ""
                this.setState(this.state)
              }}>Submit</a>
            </div>
            <div className='col s6'>
              <a type="button" className='red btn btn-block' onClick={() => {
                this.state.text = ""
                this.setState(this.state)
              }}>Cancel</a>
            </div>
          </div> :
          null
        }
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

export default graphql(addItem, {
  props: ({ ownProps, mutate }) => ({
    submit: ({ text }) => {
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
      sweetAlert("Item Added!");
    },
  }),
})(ItemForm);
