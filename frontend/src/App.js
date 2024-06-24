import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransacaoCreatePage from './pages/TransacaoCreatePage';
import TransacaoEditPage from './pages/TransacaoEditPage';
import TransacaoDetailPage from './pages/TransacaoDetailPage';

import AccountPlanCreatePage from './pages/AccountPlanCreatePage';
import ListAccountsPlans from './pages/ListAccountsPlans';

import './App.css';

const App = () => (
  <Router>
    <div className="container">
      <div className="nav">
        <a href="/">Home</a>
        <a href="/create-transaction">Criar Transação</a>
        <a href='/create-account-plan'>Criar Plano de Contas</a>
        <a href='/list-accounts-plans'>Planos de Contas Cadastrados</a>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/create-transaction" element={<TransacaoCreatePage />} />
        <Route path="/edit/:id" element={<TransacaoEditPage />} />
        <Route path="/transacao/:id" element={<TransacaoDetailPage />} />

        <Route path="/create-account-plan" element={<AccountPlanCreatePage />} />
        <Route path="/list-accounts-plans" element={<ListAccountsPlans />} />
      </Routes>
    </div>
  </Router>
);

export default App;
