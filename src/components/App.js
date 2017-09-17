import React from 'react';

import './App.css';
import Logo from '../Assets/Logo.png';

// import router from '../router';

// import Landing from './Landing/Landing';
// import About from './About/About';
// import Checkout from './Checkout/Checkout';
// import Details from './Details/Details';
// import Store from './Store/Store';


class App extends React.Component {
  render() {
  return (
    <div>
      <div>
        <img src={ Logo } alt='' />
        <h1>Hello World!!!</h1>
      </div>
    </div>
  );
}
}

export default App;
