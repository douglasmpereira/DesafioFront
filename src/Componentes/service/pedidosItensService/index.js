import api from '../api';

export const getPedidosItens = () => {
  return api.get(`/pedidosItens`).then((response) => response.data);
};