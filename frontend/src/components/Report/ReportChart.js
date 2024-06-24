import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

import { getTransacaoByInterval } from '../../api/api';
import './ReportChart.css';


Chart.register(ArcElement, Tooltip, Legend);

const GraficoReceitasDespesas = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState({});

  const fetchData = async () => {
    try {
      const response = await getTransacaoByInterval(startDate, endDate);
      const { data } = response;
      const despesas = data.filter(transacao => transacao.planoContas.tipo === 'Despesa').reduce((acc, curr) => acc + curr.valor, 0);
      const receitas = data.filter(transacao => transacao.planoContas.tipo === 'Receita').reduce((acc, curr) => acc + curr.valor, 0);

      console.log('Despesas:', despesas, 'Receitas:', receitas);
      setChartData({
        labels: ['Despesas', 'Receitas'],
        datasets: [{
          data: [despesas, receitas],
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB']
        }]
      });
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="grafico-container">
      <h2>Gráfico de Receitas vs. Despesas por Período</h2>
      <form onSubmit={handleSubmit} className="date-form">
        <div>
          <label>Data de Início:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div>
          <label>Data de Fim:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <button type="submit">Gerar Gráfico</button>
      </form>
      <div className="chart">
        {chartData.labels && <Pie data={chartData} />}
      </div>
    </div>
  );
};

export default GraficoReceitasDespesas;