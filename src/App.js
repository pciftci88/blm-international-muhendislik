import React from 'react';
import './App.css';

import Header from './components/header/header.component'; import MainSlider from './components/main-slider/main-slider.component';
import BrandSlider from './components/brand-slider/brand-slider.component';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSlider />
      <BrandSlider />
    </div>
  );
}

export default App;
