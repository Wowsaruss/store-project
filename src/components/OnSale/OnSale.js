import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './OnSale.css';

class OnSale extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/' >
          <h1 className='logo-font' >COPPER BLOOM</h1>
          </Link>
        </div>
        <hr/>
      </div>
    )
  }
}

export default OnSale;