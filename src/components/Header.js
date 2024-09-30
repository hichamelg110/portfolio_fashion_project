import React from 'react';
import './Header.css';

const Header = () => (
  <header className="bg-white py-3">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-3">
          <h1 className="m-0">
            <span className="logo-fashion">Fashion</span>
            <span className="logo-style">Style</span>
          </h1>
        </div>
        <div className="col-9">
          <nav>
            <ul className="nav justify-content-end mb-2">
              {['Women', 'Men', 'Kids'].map((category) => (
                <li className="nav-item" key={category}>
                  <a className="nav-link text-dark" href={`/${category.toLowerCase()}`}>
                    {category}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a className="nav-link text-dark" href="/search">
                  <i className="fas fa-search"></i>
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="nav">
              {['Shoes', 'Shirts', 'Blouses', 'Dresses', 'Pants', 'Accessories'].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link text-dark" href={`/${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
