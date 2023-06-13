import React from 'react';

const Header = () => {
  return (
    <header id="home" className="header">
      <nav className="nav" role="navigation">
        <div className="container nav-elements">
          <div className="branding">
            <a href="#home"><img src="images/hpluslogo.svg" alt="Logo - H Plus Sports" /></a>
          </div>
          <ul className="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#guarantee">Guarantee</a></li>
            <li><a href="#people">People</a></li>
          </ul>
        </div>
      </nav>
      <div className="container tagline">
        <h1 className="headline">Our Mission</h1>
        <p>We support and encourage <em>active and healthy</em> lifestyles, by offering <em>ethically sourced</em> and <em>eco-friendly</em> nutritional products for the <em>performance-driven</em> athlete.</p>
      </div>
    </header>
  );
}

export default Header;