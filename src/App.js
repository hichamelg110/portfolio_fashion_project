import React from 'react';
import './App.css';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';

import FeaturedProducts from './components/FeaturedProducts';

function App() {

  return (
    <div className="App">

      <Header />
      <Banner />
      <FeaturedProducts />


    </div>

  );

}

export default App;
