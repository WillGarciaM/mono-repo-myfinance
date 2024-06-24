import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAccountPlanById } from '../api/api';

const AccountPlanItem = () => {
  const { id } = useParams();
  const [accountPlan, setAccountPlan] = useState(null);

  useEffect(() => {
    const fetchAccountPlan = async () => {
      const response = await getAccountPlanById(id);
      setAccountPlan(response.data);
    };

    fetchAccountPlan();
  }, [id]);

  if (!accountPlan) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{accountPlan.descricao}</h1>
      <p>Tipo: {accountPlan.tipo}</p>
    </div>
  );
};

export default AccountPlanItem;
