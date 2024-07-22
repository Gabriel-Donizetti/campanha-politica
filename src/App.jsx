// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import PropostasSection from './components/PropostasSection';
import ContatoSection from './components/ContatoSection';
import { candidatesConfig } from './components/CandidateConfig';

const RouteHandler = () => {
  const { candidate } = useParams();
  const config = candidatesConfig[candidate] || candidatesConfig['joao']; // fallback para 'joao' se candidato não for encontrado

  return (
    <>
      <Header config={config} />
      <HomeSection config={config} />
      <PropostasSection config={config} />
      <ContatoSection config={config} />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:candidate" element={<RouteHandler />} />
        <Route path="/" element={<Navigate to="/joao" />} />
      </Routes>
    </Router>
  );
};

export default App;
