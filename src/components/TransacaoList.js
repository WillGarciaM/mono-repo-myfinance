import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTransacoes, deleteTransacao } from '../api/api';

const TransacaoList = () => {
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    const fetchTransacoes = async () => {
      const response = await getTransacoes();
      setTransacoes(response.data);
    };

    fetchTransacoes();
  }, []);

  const handleDelete = async (id) => {
    await deleteTransacao(id);
    setTransacoes(transacoes.filter((transacao) => transacao.id !== id));
  };

  return (
    <div>
      <h1>Transações</h1>
      <Link to="/create">Criar Nova Transação</Link>
      <ul>
        {transacoes.map((transacao) => (
          <li key={transacao.id}>
            {transacao.descricao} - {transacao.valor}
            <Link to={`/edit/${transacao.id}`}>Editar</Link>
            <button onClick={() => handleDelete(transacao.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransacaoList;
