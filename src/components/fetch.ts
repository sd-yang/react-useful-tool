import qs from 'qs';
import { useCallback } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: object;
  token?: string;
}

const request = async (
  endPoint: string,
  { token, data, headers, ...rest }: Config = {}
) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': data ? 'application/json' : ''
    },
    ...rest
  };

  if (config.method.toUpperCase() === 'GET') {
    endPoint += qs.stringify(data);
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window
    .fetch(`${apiUrl}/${endPoint}`, config)
    .then(async (response) => {
      if (response.status !== 200) {
        // 错误处理
        /// await...
        return Promise.reject({ message: '网络错误...' });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  // 为所有请求添加 token 之类的信息操作
  return useCallback((...[endPoint, config]: Parameters<typeof request>) => {
    request(endPoint, { ...config });
  }, []);
};
