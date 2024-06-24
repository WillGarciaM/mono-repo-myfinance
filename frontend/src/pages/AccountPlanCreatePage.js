import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccountPlanForm from '../components/AccountPlanForm';
import { createAccountPlan } from '../api/api';

const AccountPlanCreatePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (accountPlan) => {
    await createAccountPlan(accountPlan);
    navigate('/');
  };

  return (
    <div>
      <h1>Criar novo Plano de Contas</h1>
      <AccountPlanForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AccountPlanCreatePage;
