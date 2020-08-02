import React from 'react';
import { Wrapper } from './App.styles';

import Header from './components/header/header.component';
import MainSlider from './components/main-slider/main-slider.component';
import BrandSlider from './components/brand-slider/brand-slider.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <Wrapper>
      <Header />
      <MainSlider />
      <BrandSlider />
      <Footer />
    </Wrapper>
  );
}

export default App;
