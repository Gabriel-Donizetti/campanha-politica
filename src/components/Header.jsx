// src/components/Header.js
import React from 'react';

const Header = ({ config }) => {
  const { logo, secondary, logoDark } = config.candidate || {};

  return (
    <header className="text-white p-4 fixed w-full top-0 left-0 z-10 border-b-2" style={{ backgroundColor: '#e4e4e4', borderColor: secondary }}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <ul className="flex space-x-4 items-center">
            <li><a href="#home" className="hover:underline" style={{color: secondary}}>Home</a></li>
            <li><a href="#propostas" className="hover:underline" style={{color: secondary}}>Propostas</a></li>
            <li><a href="#contato" className="hover:underline" style={{color: secondary}}>Contato</a></li>
          </ul>
        </div>
        {logo && (
          <div className="flex-shrink-0">
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
