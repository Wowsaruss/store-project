import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Sizing.css';

class Sizing extends Component {
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
          <h1>General Sizing:</h1>
          <h4>Small: 0-4</h4>
          <h4>Medium: 4-8</h4>
          <h4>Large: 8-12</h4>
          <h4>XL: 14-16</h4>
          <h4>XXL: 18-20</h4>
          <h4>XXXL: 22-24</h4>
          <h4>All items fit true to size unless otherwise stated.</h4>
        </div>
      </div>
    )
  }
}

export default Sizing;