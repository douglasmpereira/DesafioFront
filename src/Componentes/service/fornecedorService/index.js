import api from '../api';

export const getFornecedor = () => {
  return api.get(`/fornecedores`).then((response) => response.data);
};

export const getByIdFornecedor = (id) => {
  return api.get(`/fornecedores/${id}`).then((response) => response.data);
};


export const postFornecedor = (user) => {
  return api
    .post(`/fornecedores/`, user)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
      
    });
};

export const putFornecedor = (id,e) => {
  return api.put(`/fornecedores/${id}`, {status: e.target.value}).then((response) => response.data).catch(error=>console.log(error));
};

export const deleteFornecedor = (id) => {
  return api.delete(`/fornecedores/${id}`).then((response) => response.data);
};
