import axios from 'axios';
import {handleError, handleResponse} from './apihelper';

// For headers
const getHeaders = (token, formData) => {
  return {
    'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  };
};

// Fetch data
export const getData = async (apiUrl, token) => {
  // console.log('Api Url from api/apiprovider ==> ', apiUrl);
  // console.log('Token from api/apiprovider ==> ', token);

  const headers = getHeaders(token);
  // console.log('Headers Token from api/apiprovider ==> ', headers);

  return axios.get(apiUrl, {headers}).then(handleResponse).catch(handleError);
};

// Post data
export const postData = async (apiUrl, data, token) => {
  const headers = getHeaders(token);

  // console.log('Headers in api/provider ==> ', headers);
  // console.log('Api Url ==> ', apiUrl);
  // console.log('Data ==> ', data);
  // console.log('Token ==> ', token);

  return axios
    .post(apiUrl, data, {headers})
    .then(handleResponse)
    .catch(handleError);
};

// Post Form data
export const postFormData = async (apiUrl, data, token) => {
  const headers = getHeaders(token, data);

  return axios
    .post(apiUrl, data, {headers})
    .then(handleResponse)
    .catch(handleError);
};

export const deleteData = async (apiUrl, token) => {
  const headers = getHeaders(token);

  console.log('DELETE Request Headers:', headers);
  console.log('DELETE Request URL:', apiUrl);

  return axios
    .delete(apiUrl, {headers})
    .then(handleResponse)
    .catch(handleError);
};
