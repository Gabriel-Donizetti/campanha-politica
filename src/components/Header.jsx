// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-10">
      <nav className="container mx-auto flex justify-between">
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#propostas" className="hover:underline">Propostas</a></li>
          <li><a href="#contato" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
