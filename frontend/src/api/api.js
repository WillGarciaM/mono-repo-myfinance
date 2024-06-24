import axios from 'axios';
import baseURL from '../common/baseURL';

var accountPlanMock = [
    { id: 1, descricao: 'Compra no supermercado', tipo: "Despesa" },
];

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

export const getPlanosDeContas = () => {
    return axios.get(`${baseURL}/plano-contas`);

}

export const createAccountPlan = (accountPlan) => {
    return axios.post(`${baseURL}/plano-contas`, accountPlan);
}

export const getAccountsPlans = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: accountPlanMock });
        }, 500);
    });
};

export const searchAccountsPlan = (query) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const results = accountPlanMock.filter((acc) => acc.descricao.toLowerCase().includes(query.descricao.toLowerCase()));
            resolve({ data: results });
        }, 500);
    });
};

export const deleteAccountPlan = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            accountPlanMock = accountPlanMock.filter((accountPlan) => accountPlan.id !== parseInt(id));
            resolve({ data: id });
        }, 500);
    });
};

const api = {
    getTransacoes,
    getTransacaoById,
    getTransacaoByInterval,
    searchTransacoes,
    createTransacao,
    updateTransacao,
    deleteTransacao,
    getPlanosDeContas,

    createAccountPlan,
    getAccountsPlans,
    searchAccountsPlan,
    deleteAccountPlan,
};

export default api;
