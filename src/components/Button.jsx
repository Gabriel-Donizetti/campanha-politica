// src/components/Button.js
import React from 'react';
import { config } from './Config';

const Button = ({ label, onClick }) => {
  return (
    <button 
      className={`bg-[${config.candidate.partyColors.secondary}] text-white px-4 py-2 rounded hover:bg-[${config.candidate.partyColors.accent}]`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
