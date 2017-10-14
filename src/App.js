import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';
import ContactSupport from './components/Contact+Support/Contact+Support';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import Footer from './components//Footer/Footer';
import Account from './components/Account/Account';
import Details from './components/Details/Details';
import Dresses from './components/Dresses/Dresses';
import NewArrivals from './components/NewArrivals/NewArrivals';
import OnSale from './components/OnSale/OnSale';
import Sizing from './components/Sizing/Sizing';


class App extends Component {
  render() {
  return (
    <div>


        <NavBar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/shop' component={Shop} />
              <Route path='/contact+support' component={ContactSupport} />
              <Route path='/cart' component={Cart} />
              <Route path='/account' component={Account} />
              <Route path='/details/:id' component={Details} />
              <Route path='/dresses' component={Dresses} />
              <Route path='/newarrivals' component={NewArrivals} />
              <Route path='/onsale' component={OnSale} />
              <Route path='/sizing' component={Sizing} />
            </Switch>  
        <Footer />
    </div>
  );
}
}

export default App;
