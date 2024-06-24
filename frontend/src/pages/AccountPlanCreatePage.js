import React from 'react';
import AccountPlanForm from '../components/AccountPlanForm';
import { createAccountPlan, getAccountsPlans } from '../api/api';

const AccountPlanCreatePage = () => {
  const handleSubmit = async (accountPlan) => {
    await createAccountPlan(accountPlan);
  };

  return (
    <div>
      <h1>Criar Novo Plano de Contas</h1>
      <AccountPlanForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AccountPlanCreatePage;
