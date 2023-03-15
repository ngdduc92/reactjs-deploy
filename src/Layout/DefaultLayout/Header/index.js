import React from 'react';
import style from './Header.module.scss';
import clsx from 'clsx';
import Logo from '../../../assets/img/Logo.png';
import Menu from '../../../assets/img/Group_350.png';
function Header() {
  return (
    <header className={clsx(style.Header)}>
      <div className={clsx(style.HeaderLogo)}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={clsx(style.HeaderMenu)}>
        <img src={Menu} alt="Menu" />
      </div>
    </header>
  );
}

export default Header;
