import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Products from './Products';
import Product from './Product';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;