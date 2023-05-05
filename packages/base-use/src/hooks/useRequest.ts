import { useCallback, useState } from 'react';
import { Config, request } from '../utils/fetch';

interface PageOptionsProps extends Config {
  inUrl: boolean;
}

export const useHttp = () => {
  // 为所有请求添加 token 之类的信息操作
  return useCallback((...[endPoint, config]: Parameters<typeof request>) => {
    return request(endPoint, { ...config });
  }, []);
};

export const usePageRequest = (
  endPoint: string,
  { inUrl, ...rest }: PageOptionsProps
) => {
  const [prevParams, setPrevParams] = useState();
  const client = useHttp();

  const onChange = useCallback(() => {
    //
  }, []);

  const refresh = useCallback(() => {
    return client(endPoint, { ...rest, data: prevParams });
  }, [prevParams]);

  return { refresh, onChange };
};
