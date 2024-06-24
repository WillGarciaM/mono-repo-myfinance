import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPlanForm = ({ onSubmit, initialData = {}, calledFor }) => {
  const navigate = useNavigate();
  const [descricao, setDescricao] = useState(initialData.descricao || '');
  const [tipo, setTipo] = useState(initialData.tipo || '');

  useEffect(() => {
    if (initialData.descricao) {
      setDescricao(initialData.descricao);
    }
    if (initialData.tipo) {
      setTipo(initialData.tipo);
    }
  }, [initialData.descricao, initialData.tipo]);

  const handleSubmit = (e) => {
    onSubmit({ descricao, tipo });

    if(calledFor === 'edit')
      navigate('/list-accounts-plans')
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
