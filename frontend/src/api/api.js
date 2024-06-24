let transacoesMock = [
    { id: 1, descricao: 'Compra no supermercado', data: '2023-06-01', planoContasId: 1, valor: 100.50 },
    { id: 2, descricao: 'Pagamento de aluguel', data: '2023-06-05', planoContasId: 2, valor: 1200.00 },
];

let planosDeContasMock = [
    { id: 1, nome: 'Alimentação' },
    { id: 2, nome: 'Moradia' },
];

export const getTransacoes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: transacoesMock });
        }, 500);
    });
};

export const getTransacaoById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const transacao = transacoesMock.find((t) => t.id === parseInt(id));
            resolve({ data: transacao });
        }, 500);
    });
};

export const createTransacao = (transacao) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            transacao.id = transacoesMock.length + 1;
            transacoesMock.push(transacao);
            resolve({ data: transacao });
        }, 500);
    });
};

export const updateTransacao = (id, updatedTransacao) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            transacoesMock = transacoesMock.map((transacao) =>
                transacao.id === parseInt(id) ? { ...transacao, ...updatedTransacao } : transacao
            );
            resolve({ data: updatedTransacao });
        }, 500);
    });
};

export const deleteTransacao = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            transacoesMock = transacoesMock.filter((transacao) => transacao.id !== parseInt(id));
            resolve({ data: id });
        }, 500);
    });
};

export const getPlanosDeContas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: planosDeContasMock });
        }, 500);
    });
};

export const searchTransacoes = (query) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const results = transacoesMock.filter((t) => t.descricao.toLowerCase().includes(query.descricao.toLowerCase()));
            resolve({ data: results });
        }, 500);
    });
};

export const getTransacaoByInterval = (startDate, endDate) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const results = transacoesMock.filter((t) => {
                const data = new Date(t.data);
                return data >= new Date(startDate) && data <= new Date(endDate);
            });
            resolve({ data: results });
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
};

export default api;
