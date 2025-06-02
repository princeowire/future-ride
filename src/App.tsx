import React from 'react';
import '../src/styles/App.scss';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import ProductInfo from './components/ProductInfo';
import Accesories from './components/accesories';
import Gallery from './components/Gallery';
import Color from './components/color';
import NewsLetter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return <div>
    <Nav />
    <HeroSection />
    <ProductInfo />
    <Accesories />
    <Gallery />
    <Color />
    <NewsLetter />
    <Footer />
  </div>;
};

export default App;
