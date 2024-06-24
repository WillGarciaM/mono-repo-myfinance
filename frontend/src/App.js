import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransacaoCreatePage from './pages/TransacaoCreatePage';
import TransacaoEditPage from './pages/TransacaoEditPage';
import TransacaoDetailPage from './pages/TransacaoDetailPage';

import AccountPlanCreatePage from './pages/AccountPlanCreatePage';
import AccountPlanEditPage from './pages/AccountPlanEditPage';
import AccountPlanList from './pages/AccountPlanList';

import ReportChart from './pages/ReportChart';

import './App.css';

const App = () => (
  <Router>
    <div className="container">
      <div className="nav">
        <a href="/">Transações</a>
        <a href='/list-accounts-plans'>Planos de Contas </a>
        <a href="/report">Relatórios</a>

      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/create-transaction" element={<TransacaoCreatePage />} />
        <Route path="/edit/:id" element={<TransacaoEditPage />} />
        <Route path="/transacao/:id" element={<TransacaoDetailPage />} />

        <Route path="/create-account-plan" element={<AccountPlanCreatePage />} />
        <Route path="/edit-account-plan/:id" element={<AccountPlanEditPage />} />
        <Route path="/list-accounts-plans" element={<AccountPlanList />} />

        <Route path="/report" element={<ReportChart />} />
      </Routes>
    </div>
  </Router>
);

export default App;
