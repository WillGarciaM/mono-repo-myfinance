import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTransacoes, deleteTransacao, searchTransacoes, getTransacaoByInterval } from '../api/api';
import moment from 'moment-timezone';

const TransacaoList = () => {
    const [transacoes, setTransacoes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [transacaoToDelete, setTransacaoToDelete] = useState(null);

    useEffect(() => {
        const fetchTransacoes = async () => {
            const response = await getTransacoes();
            setTransacoes(response.data);
        };

        fetchTransacoes();
    }, []);

    const handleDelete = async () => {
        await deleteTransacao(transacaoToDelete);
        setTransacoes(transacoes.filter((transacao) => transacao.id !== transacaoToDelete));
        closeDeleteModal();
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchQuery) {
            const response = await searchTransacoes({ descricao: searchQuery });
            setTransacoes(response.data);
            closeSearchModal();
        } else {
            const response = await getTransacoes();
            setTransacoes(response.data);
            closeSearchModal();
        }
    };

    const handleDateSearch = async (e) => {
        e.preventDefault();
        if (startDate && endDate) {
            const response = await getTransacaoByInterval(startDate, endDate);
            setTransacoes(response.data);
            closeSearchModal();
        } else {
            const response = await getTransacoes();
            setTransacoes(response.data);
            closeSearchModal();
        }
    };

    const openSearchModal = () => {
        setIsModalOpen(true);
    };

    const closeSearchModal = () => {
        setIsModalOpen(false);
    };

    const openDeleteModal = (id) => {
        setTransacaoToDelete(id);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setTransacaoToDelete(null);
    };

    return (
        <div>
            <button onClick={openSearchModal}>Pesquisa</button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeSearchModal}>&times;</span>
                        <form onSubmit={handleSearch}>
                            <span> Pesquisar por descrição</span>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Descrição"
                            />
                            <button type="submit">Pesquisar</button>
                        </form>
                        <form onSubmit={handleDateSearch}>
                            <span> Pesquisar por intervalo de data</span>
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
                            <button type="submit">Pesquisar</button>
                        </form>
                    </div>
                </div>
            )}
            {isDeleteModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeDeleteModal}>&times;</span>
                        <p>Você tem certeza que deseja excluir esta transação?</p>
                        <button onClick={handleDelete}>Excluir</button>
                        <button onClick={closeDeleteModal}>Cancelar</button>
                    </div>
                </div>
            )}
            <ul>
                {transacoes.map((transacao) => (
                    <li key={transacao.id}>
                        <span>{transacao.descricao} - R${transacao.valor} - {moment(transacao.data).tz('Etc/GMT+0').format('DD/MM/YYYY - HH:mm')}</span>
                        <span>
                            <Link to={`/edit/${transacao.id}`}>Editar</Link>
                            <button onClick={() => openDeleteModal(transacao.id)}>Excluir</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransacaoList;
