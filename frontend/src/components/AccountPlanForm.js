import React, { useState } from 'react';

const AccountPlanForm = ({ onSubmit, initialData = {} }) => {
  const [descricao, setDescricao] = useState(initialData.descricao || '');
  const [tipo, setType] = useState(initialData.descricao || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ descricao, tipo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descrição:</label>
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </div>
      <div>
        <label>Tipo:</label>
        <div>
          <label>
            <input
              type="radio" value="despesa" checked={tipo === 'despesa'} required
              onChange={(e) => setType(e.target.value)}
            />
            Despesa
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio" value="recebimento" checked={tipo === 'recebimento'} required
              onChange={(e) => setType(e.target.value)}
            />
            Recebimento
          </label>
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AccountPlanForm;
