// src/components/Header.js
import React from 'react';

const Header = ({ config }) => {
  const { logoDark, secondary } = config.candidate || {};

  return (
    <header className="text-white p-4 fixed w-full top-0 left-0 z-10" style={{ backgroundColor: '#e4e4e4' }}>
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 items-center">
          <li><a href="#home" className="hover:underline" style={{color: secondary}}>Home</a></li>
          <li><a href="#propostas" className="hover:underline" style={{color: secondary}}>Propostas</a></li>
          <li><a href="#contato" className="hover:underline" style={{color: secondary}}>Contato</a></li>
        </ul>
        {logoDark && (
          <div className="flex items-center">
            <img
              src={logoDark}
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
