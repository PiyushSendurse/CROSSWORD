import httpClient from '../http-common-admin';

const getAll = () => {
  return httpClient.get('');
};

const adminlogin = (data) => {
  return httpClient.post('signin', data);
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
export default { getAll, adminlogin, get, update, remove };
