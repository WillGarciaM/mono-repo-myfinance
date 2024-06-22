import React, { useState, useEffect } from 'react';
import { getPlanosDeContas } from '../api/api';

const TransacaoForm = ({ onSubmit, initialData = {} }) => {
  const [descricao, setDescricao] = useState(initialData.descricao || '');
  const [data, setData] = useState(initialData.data || '');
  const [planoContasId, setPlanoContasId] = useState(initialData.planoContasId || '');
  const [valor, setValor] = useState(initialData.valor || '');
  const [planosDeContas, setPlanosDeContas] = useState([]);

  useEffect(() => {
    const fetchPlanosDeContas = async () => {
      const response = await getPlanosDeContas();
      setPlanosDeContas(response.data);
    };

    fetchPlanosDeContas();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ descricao, data, planoContasId, valor });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descrição:</label>
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </div>
      <div>
        <label>Data:</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
      </div>
      <div>
        <label>Plano de Contas:</label>
        <select value={planoContasId} onChange={(e) => setPlanoContasId(e.target.value)} required>
          <option value="">Selecione um Plano de Contas</option>
          {planosDeContas.map((plano) => (
            <option key={plano.id} value={plano.id}>{plano.nome}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Valor:</label>
        <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default TransacaoForm;
