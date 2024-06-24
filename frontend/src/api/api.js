import axios from 'axios';
import baseURL from '../common/baseURL';

export const getTransacoes = () => {
    return axios.get(`${baseURL}/transacoes`);
};

export const getTransacaoById = (id) => {
    return axios.get(`${baseURL}/transacoes/${id}`);
}

export const createTransacao = (transacao) => {
    return axios.post(`${baseURL}/transacoes`, transacao);
}


export const updateTransacao = (id, updatedTransacao) => {
    return axios.put(`${baseURL}/transacoes/${id}`, updatedTransacao);
}


export const deleteTransacao = (id) => {
    return axios.delete(`${baseURL}/transacoes/${id}`);
}

export const searchTransacoes = (query) => {
    return axios.get(`${baseURL}/transacoes?descricao=${query.descricao}`);
}

export const getTransacaoByInterval = (startDate, endDate) => {
    return axios.get(`${baseURL}/transacoes/intervalo?startDate=${startDate}&endDate=${endDate}`);
}

export const getAccountPlan = () => {
    return axios.get(`${baseURL}/plano-contas`);
};

export const getAccountPlanById = (id) => {
    return axios.get(`${baseURL}/plano-contas/${id}`);
};

export const createAccountPlan = (accountPlan) => {
    return axios.post(`${baseURL}/plano-contas`, accountPlan);
}

export const updateAccountPlan = (id, updateAccountPlan) => {
    return axios.put(`${baseURL}/plano-contas/${id}`, updateAccountPlan);
}


export const searchAccountPlan = (query) => {
    return axios.get(`${baseURL}/plano-contas?descricao=${query.descricao}`);
}

export const deleteAccountPlan = (id) => {
    return axios.delete(`${baseURL}/plano-contas/${id}`);
}

const api = {
    getTransacoes,
    getTransacaoById,
    getTransacaoByInterval,
    searchTransacoes,
    createTransacao,
    updateTransacao,
    deleteTransacao,
    getAccountPlan,
    getAccountPlanById,
    searchAccountPlan,
    createAccountPlan,
    updateAccountPlan,
    deleteAccountPlan,
};

export default api;
