import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Account.css';

class Account extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" />
        <div>
          <Link to='/' >
          <h1 className='logo-font' >COPPER BLOOM</h1>
          </Link>
        </div>
        <div>
          <h1>Account!</h1>
        </div>
      </div>
    )
  }
}

export default Account;