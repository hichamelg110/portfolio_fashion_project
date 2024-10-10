import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, favorites } = useCart();

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-top">
          <Link to="/" className="logo">
            <h1>
              <span className="logo-city">Fashion</span>
              <span className="logo-fashion">Style</span>
            </h1>
          </Link>
          <div className="search-container">
            <input type="text" placeholder="Search products..." className="search-input" />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="header-icons">
            <Link to="/account" className="header-icon">
              <i className="fas fa-user"></i>
            </Link>
            <Link to="/favorites" className="header-icon">
              <i className="fas fa-heart"></i>
              <span className="icon-counter">{favorites.length}</span>
            </Link>
            <Link to="/cart" className="header-icon">
              <i className="fas fa-shopping-bag"></i>
              <span className="icon-counter">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
            </Link>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <div className="container">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <span onClick={() => setIsMenuOpen(!isMenuOpen)}>Categories <i className="fas fa-chevron-down"></i></span>
              {isMenuOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/men">Men</Link></li>
                  <li><Link to="/women">Women</Link></li>
                  <li><Link to="/kids">Kids</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/dresses">Dresses</Link></li>
            <li><Link to="/shoes">Shoes</Link></li>
            <li><Link to="/shirts">Shirts</Link></li>
            <li><Link to="/pants">Pants</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;