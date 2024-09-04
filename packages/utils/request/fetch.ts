import { checkStatus, parseData } from './utils';
import Qs from 'querystring';

const baseUrl = '/api';
const defaultConfig = {
  method: 'GET',
  credentials: 'include',
  responseType: 'json' as XMLHttpRequestResponseType,
  headers: {},
};

export const request = (url: string, options: RequestInit, params?: any) => {
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL');
  }

  const config = Object.assign(defaultConfig, options);
  const safeData = {} as Record<string, any>;
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      safeData[key] = encodeURIComponent(params[key]);
    }
  }

  if (config.method === 'GET') {
    url += `?${Qs.stringify(safeData)}`;
  } else {
    config.body = JSON.stringify(safeData);
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
  }
  
  const fetchUrl = /^http/.test(url) ? url : baseUrl + url;
  return fetch(fetchUrl, config)
    .then(checkStatus)
    .then(parseData(config))
    .then((response) => {
      return response;
    })
    .catch((reason) => {
      console.error(reason);
      return reason;
    });
};

export const Get = (url: string, params: any) => {
  return request(url, { method: 'GET' }, params);
};

export const Post = (url: string, data: any) => {
  return request(url, { method: 'POST' }, data);
};
