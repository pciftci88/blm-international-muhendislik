import React, { lazy, Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import LoadingSpinner from './components/loading-spinner/LoadingSpinner';

const Header = lazy(() => import('./components/header/Header'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const ProductOverview = lazy(() => import('./pages/product-overview/ProductOverview'));
const Impressum = lazy(() => import('./pages/impressum/Impressum'));
const About = lazy(() => import('./pages/about/About'));
const BrandsOverview = lazy(() => import('./pages/brands-overview/BrandsOverview'));
const MobileToolbar = lazy(() => import('./components/mobile-toolbar/MobileToolbar'));
const ContactBlock = lazy(() => import('./components/contact-block/ContactBlock'));

const ScrollToTop = lazy(() => import('./global/js/scrollToTop'));

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
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    );
  }
}

export default App;
