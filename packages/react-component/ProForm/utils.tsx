import { Input, Select } from 'antd';
import React from 'react';
import { ComponentType } from './index';

// 获取渲染组件
const getComponentFromType = (type?: ComponentType) => {
  let component = <Input />;
  switch (type) {
    case 'Select':
      component = <Select />;
      break;
    default:
      component = <Input />;
      break;
  }
  return component;
};
