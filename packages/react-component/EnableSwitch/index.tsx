import { Switch, SwitchProps } from 'antd';
import React, { useState } from 'react';

interface EnableSwitch extends SwitchProps {
  customRequest?: <T = unknown>(params: unknown) => Promise<T>;
  changeSuccess?: (params: unknown) => void;
  changeFail?: (checked: boolean, e: Error) => void;
}

export const EnableSwitch: React.FC<EnableSwitch> = ({
  customRequest,
  changeSuccess,
  changeFail,
  ...restProps
}) => {
  const [loading, setLoading] = useState(false);

  const switchChange = (checked: boolean) => {
    if (!customRequest) return;
    setLoading(true);
    customRequest(checked)
      .then((res) => {
        setLoading(false);
        changeSuccess?.(res);
      })
      .catch((e) => {
        setLoading(false);
        changeFail?.(checked, e);
      });
  };

  return (
    <Switch
      checkedChildren='开启'
      unCheckedChildren='关闭'
      loading={loading}
      onChange={switchChange}
      {...restProps}
    />
  );
};
