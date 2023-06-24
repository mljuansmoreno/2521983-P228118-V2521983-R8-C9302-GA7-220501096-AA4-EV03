import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo de la tienda</div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="/" className="navbar__link">Inicio</a>
        </li>
        <li className="navbar__item">
          <a href="/productos" className="navbar__link">Productos</a>
        </li>
        <li className="navbar__item">
          <a href="/carrito" className="navbar__link">Carrito</a>
        </li>
        <li className="navbar__item">
          <a href="/contacto" className="navbar__link">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
