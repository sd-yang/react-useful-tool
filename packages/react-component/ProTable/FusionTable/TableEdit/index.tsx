import React, { useMemo } from 'react';
import { Table } from '@alifd/next';
import { TableProps } from '@alifd/next/types/table';
import { EditSingleCellInline, EditSingleCellTooltip } from './EditRow';

type editColumnsProps = TableProps['columns'] & {
  // TODO render 参数
  editable?: boolean;
  onEditChange?: (keys: string[]) => void;
};

interface EditTableProps extends TableProps {
  columns: editColumnsProps;
}

const EditTable = (props: EditTableProps) => {
  const { columns, ...rest } = props;

  // TODO 整行行内编辑，通过在operation中进行配置，是否要使用 zustand 进行控制

  const getColumns = useMemo(() => {
    return columns
      ?.filter((item) => {
        return item.visible !== false;
      })
      .map((item) => {
        return {
          ...item,
          // TODO 存在cell的情况的处理,放在渲染组件内部处理展示
          cell: (value: any, _i: number, record: any) => {
            // return <EditSingleCellInline value={value} record={record} item={item} />;
            return <EditSingleCellTooltip value={value} record={record} item={item} />
          }
        };
      });
  }, [columns]);

  return <Table columns={getColumns} {...rest} />;
};

export default EditTable;
