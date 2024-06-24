import React, { useState, useEffect } from 'react';

const AccountPlanForm = ({ onSubmit, initialData = {} }) => {
  const [descricao, setDescricao] = useState(initialData.descricao || '');
  const [tipo, setTipo] = useState(initialData.tipo || '');

  useEffect(() => {
    if (initialData.tipo) {
      setTipo(initialData.tipo);
    }
  }, [initialData.tipo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ descricao, tipo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tipo:</label>
        <div>
          <label>
            <input
              type="radio"
              value="Despesa"
              checked={tipo === 'Despesa'}
              required
              onChange={(e) => setTipo(e.target.value)}
            />
            Despesa
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Receita"
              checked={tipo === 'Receita'}
              required
              onChange={(e) => setTipo(e.target.value)}
            />
            Receita
          </label>
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AccountPlanForm;
