import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransacaoCreatePage from './pages/TransacaoCreatePage';
import TransacaoEditPage from './pages/TransacaoEditPage';
import TransacaoDetailPage from './pages/TransacaoDetailPage';
import './App.css';

const App = () => (
  <Router>
    <div className="container">
      <div className="nav">
        <a href="/">Home</a>
        <a href="/create">Criar Transação</a>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<TransacaoCreatePage />} />
        <Route path="/edit/:id" element={<TransacaoEditPage />} />
        <Route path="/transacao/:id" element={<TransacaoDetailPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
