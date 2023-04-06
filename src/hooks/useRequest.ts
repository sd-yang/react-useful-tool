import { useCallback } from 'react';
import { request } from '../utils/fetch';

export const useHttp = () => {
  // 为所有请求添加 token 之类的信息操作
  return useCallback((...[endPoint, config]: Parameters<typeof request>) => {
    request(endPoint, { ...config });
  }, []);
};
