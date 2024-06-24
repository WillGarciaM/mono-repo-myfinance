import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAccountPlan, deleteAccountPlan, searchAccountPlan } from '../api/api';

const AccountPlanList = () => {
    const [accountPlans, setAccountPlan] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [accountPlanToDelete, setAccountPlanToDelete] = useState(null);

    useEffect(() => {
        const fetchAccountPlan = async () => {
            const response = await getAccountPlan();
            setAccountPlan(response.data);
        };

        fetchAccountPlan();
    }, []);

    const handleDelete = async () => {
        await deleteAccountPlan(accountPlanToDelete);
        setAccountPlan(accountPlans.filter((accountPlan) => accountPlan.id !== accountPlanToDelete));
        closeDeleteModal();
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchQuery) {
            const response = await searchAccountPlan({ descricao: searchQuery });
            setAccountPlan(response.data);
            closeSearchModal();
        } else {
            const response = await getAccountPlan();
            setAccountPlan(response.data);
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
        setAccountPlanToDelete(id);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setAccountPlanToDelete(null);
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
                    </div>
                </div>
            )}
            {isDeleteModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeDeleteModal}>&times;</span>
                        <p>Você tem certeza que deseja excluir este plano de contas?</p>
                        <button onClick={handleDelete}>Excluir</button>
                        <button onClick={closeDeleteModal}>Cancelar</button>
                    </div>
                </div>
            )}
            <ul>
                {accountPlans.map((accountPlan) => (
                    <li key={accountPlan.id}>
                        <span>{accountPlan.descricao} </span>
                        <span>
                            <Link to={`/edit-account-plan/${accountPlan.id}`}>Editar</Link>
                            <button onClick={() => openDeleteModal(accountPlan.id)}>Excluir</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccountPlanList;
