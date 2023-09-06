import { SelectProps } from 'antd';
import { useCallback, useState } from 'react';

export interface RequestOptions {
  request?: <T = unknown>(params: unknown) => Promise<T>;
  manual?: boolean;
  formatParams?: (params: any) => any;
  formatResult?: (params: any) => any;
}

export const useGetOptions = (
  request: RequestOptions['request'],
  options: RequestOptions
) => {
  const [dataSource, setDataSource] = useState<SelectProps['options']>([]);
  const [loading, setLoading] = useState(false);

  const run = useCallback((params: any) => {
    if (!request) return;
    setLoading(true);
    /** 可以通过传入的 formatParams 处理参数 */
    const runParams = options.formatParams
      ? options.formatParams(params)
      : params;
    return request(runParams)
      .then((res) => {
        const list = options.formatResult ? options.formatResult(res) : res;
        setDataSource(list);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return { dataSource, loading, run };
};
