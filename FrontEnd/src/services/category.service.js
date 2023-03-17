import httpClient from '../http-common';

const getAll = () => {
  return httpClient.get('getAllCategoris');
};

const create = (data) => {
  return httpClient.post('addCategory', data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`deleteCategory/${id}`);
};
export default { getAll, create, get, update, remove };
