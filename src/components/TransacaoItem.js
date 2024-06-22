import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTransacaoById } from '../api/api';

const TransacaoItem = () => {
  const { id } = useParams();
  const [transacao, setTransacao] = useState(null);

  useEffect(() => {
    const fetchTransacao = async () => {
      const response = await getTransacaoById(id);
      setTransacao(response.data);
    };

    fetchTransacao();
  }, [id]);

  if (!transacao) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{transacao.descricao}</h1>
      <p>Data: {new Date(transacao.data).toLocaleDateString()}</p>
      <p>Valor: {transacao.valor}</p>
      <p>Plano de Contas: {transacao.planoContasId}</p>
    </div>
  );
};

export default TransacaoItem;
