import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import ProductOverview from './pages/product-overview/ProductOverview';
import Impressum from './pages/impressum/Impressum';
import About from './pages/about/About';
import BrandsOverview from './pages/brands-overview/BrandsOverview';
import MobileToolbar from './components/mobile-toolbar/MobileToolbar';
import ContactBlock from './components/contact-block/ContactBlock';

import ScrollToTop from './global/js/scrollToTop';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    }
  }

  componentDidMount() {
    this.setState({
      isMobile: window.innerWidth <= 1020
    });
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <React.Fragment>
        <HashRouter basename="/">
          {this.state.isMobile ? (
            <React.Fragment>
              <MobileToolbar />
              <ContactBlock />
            </React.Fragment>
          ) : (
              <Header />
            )}
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/produkte' component={ProductOverview} />
              <Route exact path='/impressum' component={Impressum} />
              <Route exact path='/ueber-uns' component={About} />
              <Route exact path='/markenuebersicht' component={BrandsOverview} />
            </Switch>
          </ScrollToTop>
        </HashRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
