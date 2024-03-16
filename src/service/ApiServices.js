import axios from "axios";

const SERVER_URL ='https://shop-api-2lnh.onrender.com';

export const login = (body) => {
  
  return axios.post(`${SERVER_URL}/api/user/login`, body);
};
export const register = (body) => {
  
  return axios.post(`${SERVER_URL}/api/user/register`, body);
};

export const getProducts = () => {
  const config = {
    headers: { "auth-token": localStorage.getItem("Token") },
  };

  return axios.get(`${SERVER_URL}/api/product`, config);
};

export const getProduct = (id) => {
  const config = {
    headers: { "auth-token": localStorage.getItem("Token") },
  };

  return axios.get(`${SERVER_URL}/api/product/${id}`, config);
};

export const addProducts = (body) => {
  const config = {
    headers: { "auth-token": localStorage.getItem("Token") },
  };

  return axios.post(`${SERVER_URL}/api/product`, body, config);
};
export const updateProducts = (id, body) => {
  const config = {
    headers: { "auth-token": localStorage.getItem("Token") },
  };

  return axios.put(`${SERVER_URL}/api/product/${id}`, body, config);
};
export const deleteProducts = (id) => {
  const config = {
    headers: { "auth-token": localStorage.getItem("Token") },
  };

  return axios.delete(`${SERVER_URL}/api/product/${id}`, config);
};
