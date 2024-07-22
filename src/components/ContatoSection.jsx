// src/components/ContatoSection.js
import React from 'react';

const ContatoSection = ({ config }) => {
  const { text, secondary } = config.candidate || {};
  const { email, whatsapp, facebook, instagram, twitter } = config.candidate.contact || {};

  return (
    <section id="contato" className="p-6 flex flex-col items-center" style={{ backgroundColor: secondary }}>
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: text }}>
        Contato
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {email && (
          <a
            href={`mailto:${email}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Email
          </a>
        )}
        {whatsapp && (
          <a
            href={`https://wa.me/${whatsapp}`}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            WhatsApp
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Instagram
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Twitter
          </a>
        )}
        {facebook && (
          <a
            href={facebook}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Facebook
          </a>
        )}
      </div>
    </section>
  );
};

export default ContatoSection;
