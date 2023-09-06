import { Select, SelectProps } from 'antd';
import React from 'react';
import { RequestOptions, useGetOptions } from './useGetOptions';

interface ApiSelect extends SelectProps, RequestOptions {
  deps: any[];
}

export const ApiSelect: React.FC<ApiSelect> = ({
  request,
  manual = false,
  formatParams,
  formatResult,
  onChange,
  ...restProps
}) => {
  const { loading, dataSource, run } = useGetOptions(request, {
    formatParams,
    formatResult
  });

  const handleChange = (value: any, option: any) => {
    if (!onChange) return;
    onChange(value, option);
  };

  return (
    <Select
      allowClear
      options={dataSource}
      loading={loading}
      onChange={handleChange}
      {...restProps}
    />
  );
};
