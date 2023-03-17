import httpClient from '../http-common-customer';

const getAll = () => {
  return httpClient.get('');
};


const create = (data) => {
  return httpClient.post('saveCustomerdetails', data);
};

const bookProduct = (data) => {
  return httpClient.post('addCartItem', data);
};


const forgetPassword = (email) => {
  return httpClient.post('forgetPassword', email);
};

const loginCustomer = (data) => {
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

export default { getAll, create, get, update, remove, loginCustomer, bookProduct,forgetPassword };
