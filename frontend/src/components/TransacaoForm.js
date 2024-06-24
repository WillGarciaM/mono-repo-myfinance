import React, { useState, useEffect } from 'react';
import axios from "axios";
import baseURL from '../common/baseURL';

const TransacaoForm = ({ onSubmit, initialData = {} }) => {
  const [descricao, setDescricao] = useState(initialData.descricao || '');
  const [data, setData] = useState(initialData.data || '');
  const [planoContasId, setPlanoContasId] = useState(initialData.planoContasId || '');
  const [valor, setValor] = useState(initialData.valor || '');
  const [planosDeContas, setPlanosDeContas] = useState([]);

  useEffect(() => {
    const fetchPlanosDeContas = async () => {
      await axios.get(`${baseURL}/plano-contas`).then((response) => {
        setPlanosDeContas(response.data);
      })
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
        <input type="datetime-local" value={data} onChange={(e) => setData(e.target.value)} required />
      </div>
      <div>
        <label>Plano de Contas:</label>
        <select value={planoContasId} onChange={(e) => setPlanoContasId(e.target.value)} required>
          <option value="">Selecione um Plano de Contas</option>
          {planosDeContas.map((plano) => (
            <option key={plano.id} value={plano.id}>{plano.descricao}</option>
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
