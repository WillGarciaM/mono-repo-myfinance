import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTransacoes, deleteTransacao, searchTransacoes, getTransacaoByInterval } from '../api/api';

const TransacaoList = () => {
  const [transacoes, setTransacoes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery) {
      const response = await searchTransacoes({ descricao: searchQuery });
      setTransacoes(response.data);
    } else {
      const response = await getTransacoes();
      setTransacoes(response.data);
    }
  };

  const handleDateSearch = async (e) => {
    e.preventDefault();
    if (startDate && endDate) {
      const response = await getTransacaoByInterval(startDate, endDate);
      setTransacoes(response.data);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Pesquisa</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por descrição"
              />
              <button type="submit">Pesquisar</button>
            </form>
            <form onSubmit={handleDateSearch}>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <button type="submit">Pesquisar por intervalo</button>
            </form>
          </div>
        </div>
      )}
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
    </div>
  );
};

export default TransacaoList;
