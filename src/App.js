import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import ProductOverview from './pages/product-overview/ProductOverview';
import Impressum from './pages/impressum/Impressum';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/produkte" component={ProductOverview} />
        <Route exact path="/impressum" component={Impressum} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
