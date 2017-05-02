import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export default class ListItemHolder extends React.Component {
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
          console.log('text', this.state.text);
          // submit({text: this.state.text})
        }}>Submit</button>
      </div>
    )
  }
}
// const addItem = gql`
//   mutation addItem($text:String) {
//   addItem(text: $text) {
//     _id,
//     text
//   }
// }
// `;
//
// export const LoginForm = graphql(addItem, {
//   props: ({ ownProps, mutate }) => ({
//     submit: ({ text }) => mutate({
//       variables: { text },
//         // refetchQueries: [{
//         //   query:  gql`
//         //     query {
//         //       items{
//         //         _id,
//         //         text
//         //       }
//         //     }
//         //   `
//         // }]
//     }),
//   }),
// })(ListItemHolder);
