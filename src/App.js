import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Homepage from './pages/homepage/homepage.component';
import ProductOverview from './pages/product-overview/product-overview.component';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/produkte" component={ProductOverview} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
