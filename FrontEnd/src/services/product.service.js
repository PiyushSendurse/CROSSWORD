import httpClient from '../http-common-product';

const getAll = (id) => {
  return httpClient.get(`getAllProducts/${id}`);
};

const create = (data,catId) => {
  return httpClient.post(`addPizza/${catId}`, data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`deleteProduct/${id}`);
};
export default { getAll, create, get, update, remove };
