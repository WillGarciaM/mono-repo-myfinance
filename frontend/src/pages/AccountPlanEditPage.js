import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AccountPlanForm from '../components/AccountPlanForm';
import { getAccountPlanById, updateAccountPlan } from '../api/api';

const AccountPlanEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchAccountPlan = async () => {
      const response = await getAccountPlanById(id);
      setInitialData(response.data);
    };

    fetchAccountPlan();
  }, [id]);

  const handleSubmit = async (accountPlan) => {
    await updateAccountPlan(id, accountPlan);
    navigate('/');
  };

  if (!initialData) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Editar Plano de Contas</h1>
      <AccountPlanForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
};

export default AccountPlanEditPage;
