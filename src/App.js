// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransacaoCreatePage from './pages/TransacaoCreatePage';
import TransacaoEditPage from './pages/TransacaoEditPage';
import TransacaoDetailPage from './pages/TransacaoDetailPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<TransacaoCreatePage />} />
      <Route path="/edit/:id" element={<TransacaoEditPage />} />
      <Route path="/transacao/:id" element={<TransacaoDetailPage />} />
    </Routes>
  </Router>
);

export default App;
