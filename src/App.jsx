// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import PropostasSection from './components/PropostasSection';
import ContatoSection from './components/ContatoSection';
import { candidatesConfig } from './components/CandidateConfig';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/:candidate" element={<RouteHandler />} />
        <Route path="/" element={<div>Selecione um candidato para visualizar a landing page.</div>} />
      </Routes>
    </Router>
  );
};

const RouteHandler = () => {
  const { candidate } = useParams();
  const config = candidatesConfig[candidate] || candidatesConfig.default;

  return (
    <>
      <HomeSection config={config} />
      <PropostasSection />
      <ContatoSection />
    </>
  );
};

export default App;
