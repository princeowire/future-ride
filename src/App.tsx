import React from 'react';
import '../src/styles/App.scss';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import ProductInfo from './components/ProductInfo';

const App: React.FC = () => {
  return <div>
    <Nav />
    <HeroSection />
    <ProductInfo />
  </div>;
};

export default App;
