import React from 'react';
import headerLogo from '../images/headerlogo.svg';

function Header() {
  return (
    <header className="header section">
     <img className="header__logo-image" src={headerLogo} alt="логотип сайта"/>
    </header>
  );
}

export default Header;