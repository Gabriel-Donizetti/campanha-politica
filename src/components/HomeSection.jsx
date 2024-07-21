// src/components/HomeSection.js
import React from 'react';

const HomeSection = ({ config }) => {
  const { photo, name, slogan, summary, primary, secondary } = config.candidate || {};

  if (!config || !config.candidate) {
    return <div>Erro: Configuração não encontrada.</div>;
  }

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center p-6 mt-16"
      style={{ backgroundColor: primary }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto text-center md:text-left">
        {/* Foto do candidato */}
        <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={photo}
            alt="Candidato"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Resumo sobre o candidato */}
        <div className="flex-grow md:w-1/2 md:pl-6">
          <div
            className="bg-white text-white p-6 rounded-lg mx-auto"
            style={{ backgroundColor: primary }}
          >
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <p className="text-lg mb-4">{slogan}</p>
            <p className="text-base">{summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
