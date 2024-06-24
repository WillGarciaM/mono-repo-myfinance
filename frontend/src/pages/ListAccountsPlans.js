import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAccountPlan, searchAccountPlan, deleteAccountPlan } from '../api/api';
import axios from "axios";
import baseURL from '../common/baseURL';

const ListAccountsPlans = () => {
    const [accountsPlans, setAccountsPlans] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchAccountsPlan = async () => {
            await axios.get(`${baseURL}/plano-contas`).then((response) => {
                setAccountsPlans(response.data);
            })
        };

        fetchAccountsPlan();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchQuery) {
            const response = await searchAccountPlan({ descricao: searchQuery });
            setAccountsPlans(response.data);
        } else {
            const response = await getAccountPlan();
            setAccountsPlans(response.data);
        }
    };

    const handleDelete = async (id) => {
        await deleteAccountPlan(id);
        setAccountsPlans(accountsPlans.filter((accountPlan) => accountPlan.id !== id));
    };


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Pesquisa</button>
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
                    </div>
                </div>
            )}
            <ul>
                {accountsPlans.map((accountPlan) => (
                    <li key={accountPlan.id}>
                        <span>{accountPlan.descricao}</span>
                        <span>
                            <Link to={`/edit-account-plan/${accountPlan.id}`}>Editar</Link>
                            <button onClick={() => handleDelete(accountPlan.id)}>Excluir</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListAccountsPlans;
