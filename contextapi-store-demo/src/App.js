import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'
import {Details, Navbar, ProductList, Default, Modal} from './components'
import Cart from './components/Cart'

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path='/' component={ProductList}></Route>
      <Route exact path='/details' component={Details}></Route>
      <Route exact path='/cart' component={Cart}></Route>
      <Route component={Default}></Route>
    </Switch>
    <Modal />

    </React.Fragment>
  );
}

export default App;
