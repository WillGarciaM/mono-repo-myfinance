import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TransacaoForm from '../components/TransacaoForm';
import { getTransacaoById, updateTransacao } from '../api/api';

const TransacaoEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchTransacao = async () => {
      const response = await getTransacaoById(id);
      setInitialData(response.data);
    };

    fetchTransacao();
  }, [id]);

  const handleSubmit = async (transacao) => {
    await updateTransacao(id, transacao);
    navigate('/');
  };

  if (!initialData) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Editar Transação</h1>
      <TransacaoForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
};

export default TransacaoEditPage;
