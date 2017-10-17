import React, {Component} from 'react';
import {Link} from 'react-router-dom';


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
          <h1 className='page-header common-text' >ACCOUNT</h1>
        </div>
        <hr />
        <div className='logout-button' >
            <a href={'http://localhost:3080/auth/logout'}><button className='checkout'>LOGOUT</button></a>
        </div>
      </div>
    )
  }
}

export default Account;