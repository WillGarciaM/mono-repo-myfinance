import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TransacaoForm from '../components/TransacaoForm';
import { updateTransacao, getTransacoes } from '../api/api';

const TransacaoEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchTransacao = async () => {
      const response = await getTransacoes();
      const t = response.data.filter(e => e.id.toString() === id);
      setInitialData(...t);
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
      <h1>Editar Transação</h1> <>{console.log(initialData)}</>
      <TransacaoForm onSubmit={handleSubmit} initialData={initialData} calledFor={'edit'} />
    </div>
  );
};

export default TransacaoEditPage;
