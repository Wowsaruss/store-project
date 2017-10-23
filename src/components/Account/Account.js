import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Account extends Component {
  render() {
    return (
      <div>
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
                <a href={`${process.env.REACT_APP_HOST}/auth/logout`}><button className='checkout'>LOGOUT</button></a>
            </div>
      </div>
    )
  }
}

export default Account;