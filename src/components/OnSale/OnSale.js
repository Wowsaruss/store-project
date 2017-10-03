import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './OnSale.css';

class OnSale extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" />
        <div>
          <Link to='/' >
          <h1 className='logo-font' >COPPER BLOOM</h1>
          </Link>
        </div>
      </div>
    )
  }
}

export default OnSale;