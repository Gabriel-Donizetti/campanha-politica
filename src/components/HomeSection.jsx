// src/components/HomeSection.js
import React from 'react';

const HomeSection = ({ config }) => {
  const { photo, name, political, slogan, summary, primary, secondary } = config.candidate || {};

  if (!config || !config.candidate) {
    return <div>Erro: Configuração não encontrada.</div>;
  }

  return (
    <section
      id="home"
      className="flex flex-col items-center p-6 mt-16"
      style={{ backgroundColor: primary }}
    >
      {/* Slogan como Título Principal */}
      <div className="w-full max-w-5xl mx-auto text-center mb-12"> {/* Adicionando margem inferior aqui */}
        <h1 className="text-4xl font-bold mb-4 text-white">{slogan}</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto text-center md:text-left space-y-6 md:space-y-0 md:space-x-6">
        {/* Foto do candidato */}
        <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={photo}
            alt={`${name} - Candidato`}
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        {/* Resumo sobre o candidato */}
        <div className="flex-grow md:w-1/2 md:pl-6 flex flex-col items-center md:items-start">
          <div
            className="bg-white text-white p-6 rounded-lg shadow-md"
            style={{ backgroundColor: secondary }}
          >
            <h2 className="text-3xl font-bold mb-2 text-cente">{name}</h2>
            <h5 className="text-lg mb-4">{political}</h5>
            <p className="text-base">{summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
