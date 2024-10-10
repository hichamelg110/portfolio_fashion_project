import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import Cart from './components/Cart';
import Favorites from './components/Favorites';



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
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;