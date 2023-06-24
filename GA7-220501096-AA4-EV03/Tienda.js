import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Checkout from './Checkout';
import ListadeProductos from './ListadeProductos';
import DetallesdeProducto from './DetallesdeProducto';
import Carrito from './Carrito';
import FormularioContacto from './FormularioContacto';

const Tienda = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListadeProductos} />
        <Route path="/product/:id" component={DetallesdeProducto} />
        <Route path="/cart" component={Carrito} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/contact" component={FormularioContacto} />
      </Switch>
    </Router>
  );
};

export default Tienda;
