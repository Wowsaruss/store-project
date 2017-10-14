import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class OnSale extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/' >
          <h1 className='logo-font' >COPPER BLOOM</h1>
          </Link>
        </div>
        <h1 className='page-header common-text' >ON SALE</h1>
        <hr/>
      </div>
    )
  }
}

export default OnSale;