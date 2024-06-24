import React, { useState } from 'react';

const AccountPlanForm = ({ onSubmit, initialData = {} }) => {
  const [descricao, setDescricao] = useState(initialData.descricao || '');
  const [type, setType] = useState(initialData.descricao || '');

  const handleSubmit = (e) => {
    // e.preventDefault();
    onSubmit({ descricao, type });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descrição:</label>
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </div>
      <div>
        <label>Tipo:</label>
        <select onInput={(e) => setType(e.target.value)} required>
          <option value="">Selecione um Plano de Contas</option>
          <option value="despesa">Despesa</option>
          <option value="recebimento">Recebimento</option>
        </select>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AccountPlanForm;
