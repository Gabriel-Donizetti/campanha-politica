// src/components/ContatoSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContatoSection = ({ config }) => {
  const { text, secondary } = config.candidate || {};
  const { email, whatsapp, facebook, instagram, twitter } = config.candidate.contact || {};

  return (
    <section
      id="contato"
      className="p-6 flex flex-col items-center border-t-2"
      style={{ backgroundColor: '#e4e4e4', borderColor: secondary }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: secondary }}>
        Contato
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {email && (
          <a
            href={`mailto:${email}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        )}
        {whatsapp && (
          <a
            href={`https://wa.me/${whatsapp}`}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
        {facebook && (
          <a
            href={facebook}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        )}
      </div>
    </section>
  );
};

export default ContatoSection;
