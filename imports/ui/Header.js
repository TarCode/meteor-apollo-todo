import React from 'react'
import { browserHistory } from 'react-router'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
    $(".dropdown-button").dropdown();

  }

  render() {
    return (
      <div className='navbar-fixed'>
        <nav className='red darken-4'>
          <div className='navbar-wrapper'>
            <div style={{paddingLeft: '2%'}} className='brand-logo'>
              <small onClick={ () => browserHistory.push('/')} className='thin'>Hello</small>
            </div>
            <a className="right dropdown-button" href="#!" data-activates="dropdown1"><i className="white-text material-icons">more_vert</i></a>
            <ul id="dropdown1" className="right dropdown-content">
              <li><a onClick={ () => browserHistory.push('/one')} href="#!">one</a></li>
              <li><a onClick={ () => browserHistory.push('/two')} href="#!">two</a></li>
              <li className="divider"></li>
              <li><a onClick={ () => browserHistory.push('/three')} href="#!">three</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
