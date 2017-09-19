import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import Landing from './components/Landing/Landing';
import Store from './components/Store/Store';
import Details from './components/Details/Details';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';


import './index.css';

ReactDOM.render(
    <Router>
        <div>
            <nav>
                <Switch>
                <Route exact path='/' component={App} />
                <Route path='/landing' component={Landing} />
                <Route path='/store' component={Store} />
                <Route path='/details' component={Details} />
                <Route path='/about' component={About} />
                <Route path='/checkout' component={Checkout} />
                </Switch>
            </nav>
        </div>
    </Router>,
    document.getElementById('root'));
// registerServiceWorker();
