import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Accessories from './components/Accessories';
import Dresses from './components/Dresses';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Pants from './components/Pants';
import Shoes from './components/Shoes';
import Shirts from './components/Shirts';


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <FeaturedProducts />
              </>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/dresses" element={<Dresses />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/shirts" element={<Shirts />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;