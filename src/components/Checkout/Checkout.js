import React from 'react';

import './Checkout.css';
import Logo from '../../Assets/Logo.png';

class Child extends React.Component {
  render() {
    return (
      <div>
        <div>
        <img src={ Logo } alt='' />
          <h1>Checkout!</h1>
        </div>
      </div>
    )
  }
}

export default Child;