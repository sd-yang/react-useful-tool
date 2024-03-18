import { checkStatus, parseData } from './utils';

const baseUrl = '/api';
const defaultConfig = {
  method: 'GET',
  credentials: 'include',
  responseType: 'json',
  headers: {},
};

export const request = (url: string, options) => {
  const config = Object.assign(defaultConfig, options);
  const fetchUrl = /^http/.test(url) ? url : baseUrl + url;
  return fetch(fetchUrl, config)
    .then(checkStatus)
    .then(parseData(config))
    .then((response) => {
      return response;
    })
    .catch((reason) => {
      return reason;
    });
};

export const Get = (url: string, params) => {
  return request(url, { method: 'GET', params });
};

export const Post = (url: string, data) => {
  return request(url, { method: 'POST', body: data });
};
