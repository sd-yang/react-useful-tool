import React, { useState } from 'react';
import { Message, Input, Button, Icon, Box, Balloon } from '@alifd/next';

interface EditCellProps {
  value: any;
  record: Record<string, any>;
  item: any;
  onChange?: (value: any) => void;
  callback?: (
    data: any,
    record: EditCellProps['record'],
    item: EditCellProps['item']
  ) => Promise<any>;
}

/**
 * 行内编辑 - 单个单元格进行编辑
 */

export const EditSingleCellInline = (params: EditCellProps) => {
  const [data, setData] = useState(params.value);
  const [last, setLast] = useState(params.value);
  const [isEdit, setIsEdit] = useState(false);
  const [state, setState] = useState<'loading'>();

  const toggle = () => setIsEdit(!isEdit);

  const restToggle = () => {
    setData(last);
    toggle();
  };

  const handleOk = () => {
    if (params.callback) {
      setState('loading');
      Promise.resolve(params.callback(data, params.record, params.item))
        .then(() => {
          setLast(data);
          toggle();
        })
        .catch((msg) => {
          Message.error(msg || '修改失败，请重试！');
        })
        .finally(() => setState(undefined));
      return;
    }
    toggle();
  };

  return isEdit ? (
    <Input
      state={state}
      value={data}
      onChange={setData}
      style={{ width: '100%' }}
      addonAfter={
        <div>
          <Button
            size='large'
            text
            type='primary'
            onClick={handleOk}
            style={{ margin: '0 10px' }}
          >
            <Icon type='select' />
          </Button>
          <Button size={'large'} text type='primary' onClick={restToggle}>
            <Icon type='refresh' />
          </Button>
        </div>
      }
    />
  ) : (
    <Box direction='row' justify='space-between' spacing={20}>
      <span>{data}</span>
      <Button text type='primary' onClick={toggle}>
        <Icon type='edit' />
      </Button>
    </Box>
  );
};

/**
 * 行内编辑 - 单元格提示框编辑
 */

export const EditSingleCellTooltip = (params: EditCellProps) => {
  const { item, value, callback, record } = params;
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(value);

  const close = () => {
    setVisible(false);
  };

  const handleSave = () => {
    if (!callback) {
      close();
      return;
    }
    // 更新数据后关闭弹窗
    // TODO 乐观更新，直接更新展示数据，错误直接还原，存在数据转化cell在该组件中处理
    Promise.resolve(callback(data, record, item)).then(() => close());
  };

  return (
    <Balloon
      v2
      triggerType='click'
      title={item.title}
      trigger={
        <span style={{ cursor: 'pointer', color: '#1890FF' }}>{value}</span>
      }
      visible={visible}
      onVisibleChange={setVisible}
    >
      <Box spacing={10}>
        <Input defaultValue={value} onBlur={(e) => setData(e.target.value)} />
        <Box direction='row' justify='flex-end' spacing={10}>
          <Button onClick={close}>取消</Button>
          <Button type='primary' onClick={handleSave}>确定</Button>
        </Box>
      </Box>
    </Balloon>
  );
};
