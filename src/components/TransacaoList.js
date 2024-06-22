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
    <ul>
      {transacoes.map((transacao) => (
        <li key={transacao.id}>
          <span>{transacao.descricao} - R${transacao.valor.toFixed(2)}</span>
          <span>
            <Link to={`/edit/${transacao.id}`}>Editar</Link>
            <button onClick={() => handleDelete(transacao.id)}>Excluir</button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TransacaoList;
