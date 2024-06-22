// src/pages/TransacaoCreatePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransacaoForm from '../components/TransacaoForm';
import { createTransacao } from '../api/api';

const TransacaoCreatePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (transacao) => {
    await createTransacao(transacao);
    navigate('/');
  };

  return (
    <div>
      <h1>Criar Nova Transação</h1>
      <TransacaoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default TransacaoCreatePage;
