/**
 * 表格的行内编辑
 * 1. 整行为一个整体进行编辑，控制按钮在操作栏中
 *  - antd 中，需要在Table的最外部包裹Form
 * 2. 行内编辑，控制按钮在单元格中: 乐观更新表格 ｜ 取消确定按钮
 */

interface EditCommonProps {
  value?: any;
  component?: string;
}

interface EditorRowProps extends EditCommonProps {};

interface EditorCellProps extends EditCommonProps {};


const useEditRow = (props: EditorRowProps) => {};

export const EditRow = (props: EditorRowProps) => {};

export const EditCell = (props: EditorRowProps) => {};
