import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';


import App from './components/App';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './components/Sketch';
import 'gestalt/dist/gestalt.css';

import * as serviceWorker from './serviceWorker';

// import App from '/components/App';


const Root = () => (
    <Router>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route component={App} exact path="/" />
                <Route component={Signin} path="/signin" />
                <Route component={Signup} path="/signup" />
                <Route component={Checkout} path="/checkout" />
            </Switch>
            <P5Wrapper sketch={sketch} />
        </React.Fragment>
    </Router>
)




ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();


// hot reloader
if (module.hot){
    module.hot.accept();
}