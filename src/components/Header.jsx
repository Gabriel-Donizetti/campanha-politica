// src/components/Header.js
import React from 'react';

const Header = ({ config }) => {
  const { logo, text, secondary } = config.candidate || {};

  return (
    <header className="text-white p-4 fixed w-full top-0 left-0 z-10" style={{ backgroundColor: secondary }}>
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 items-center">
          <li><a href="#home" className="hover:underline" style={{color: text}}>Home</a></li>
          <li><a href="#propostas" className="hover:underline" style={{color: text}}>Propostas</a></li>
          <li><a href="#contato" className="hover:underline" style={{color: text}}>Contato</a></li>
        </ul>
        {logo && (
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto"
              style={{ maxHeight: '32px' }} // define uma altura máxima de 32px para a logo
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
