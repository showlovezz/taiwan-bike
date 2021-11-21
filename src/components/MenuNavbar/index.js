import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as CloseMenu } from '../../assets/images/close.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import './styles.scss';

const MenuNavbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  if (location.pathname === '/') return <></>;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="custom-navbar">
      <Container className="custom-navbar__block">
        <div className="custom-navbar__brand">
          <Link to="/">
            <span>YuoBike</span>
          </Link>
        </div>
        <div className="custom-navbar__rwd-text">
          <span>
            {location.pathname === '/find-bikes'
              ? '找YouBike'
              : location.pathname === '/find-bike-path'
              ? '找路線'
              : location.pathname === '/find-food-and-tour'
              ? '找美食 / 景點'
              : null}
          </span>
        </div>
        <ul className={click ? 'custom-navbar__menu active' : 'custom-navbar__menu'}>
          <li onClick={closeMobileMenu} className="custom-navbar__menu-item">
            <Link
              to="/find-bikes"
              className={location.pathname === '/find-bikes' ? 'custom-navbar__menu-item-active' : null}
            >
              <span>找 YouBike</span>
            </Link>
          </li>
          <li onClick={closeMobileMenu} className="custom-navbar__menu-item">
            <Link
              to="/find-bike-path"
              className={location.pathname === '/find-bike-path' ? 'custom-navbar__menu-item-active' : null}
            >
              <span>找路線</span>
            </Link>
          </li>
          <li onClick={closeMobileMenu} className="custom-navbar__menu-item">
            <Link
              to="/find-food-and-tour"
              className={location.pathname === '/find-food-and-tour' ? 'custom-navbar__menu-item-active' : null}
            >
              <span>找美食 / 景點</span>
            </Link>
          </li>
        </ul>
        <div className="custom-navbar__menubar" onClick={handleClick}>
          {click ? (
            <CloseMenu className="custom-navbar__menubar-icon" />
          ) : (
            <MenuIcon className="custom-navbar__menubar-icon" />
          )}
        </div>
      </Container>
    </nav>
  );
};

export default MenuNavbar;
