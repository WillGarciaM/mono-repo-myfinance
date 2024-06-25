import React, { useState, useEffect } from 'react';
import axios from "axios";
import baseURL from '../common/baseURL';
import moment from 'moment';

const TransacaoForm = ({ onSubmit, initialData = {}, calledFor }) => {
  const [descricao, setDescricao] = useState(initialData.descricao || '');
  const [data, setData] = useState(initialData.data || '');
  const [planoContas, setPlanoContas] = useState(initialData.planoContas || '');
  const [valor, setValor] = useState(initialData.valor || '');
  const [selectionPlanosDeContas, setSelectionPlanosDeContas] = useState([]);

  useEffect(() => {
    const fetchSelectionPlanosDeContas = async () => {
      await axios.get(`${baseURL}/plano-contas`).then((response) => {
        setSelectionPlanosDeContas(response.data);
      })
    };

    if (initialData) {
      setData(moment(data).tz('Etc/GMT+0').format("YYYY-MM-DDTHH:mm"));
    }

    fetchSelectionPlanosDeContas();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ descricao, data, planoContas, valor });
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
        <select value={planoContas} onChange={(e) => setPlanoContas(e.target.value)} defaultValue={planoContas ? planoContas.descricao : ''} required>
          <option value={planoContas ? planoContas.id : ''}>{planoContas ? planoContas.descricao : 'Selecione uma Opção'}</option>
          {selectionPlanosDeContas.map((plano) => (
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
