import React, { useContext, useMemo } from 'react';
import { Table, Button } from '@alifd/next';

import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// @ts-ignore
const { SelectionRow } = Table;
const RowContext = React.createContext<any>({});

const DragHandle: React.FC = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return (
    <Button
      text
      size='small'
      type='primary'
      style={{ cursor: 'move' }}
      ref={setActivatorNodeRef}
      {...listeners}
    >TTTTT</Button>
  );
};

const columns = [
  { key: 'sort', align: 'center', width: 80, cell: () => <DragHandle /> },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' }
];

const initialData = [
  { key: '1', name: 'John Brown', age: 32, address: 'Long text Long' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }
];

const NewRow = (props: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: props['drag-index'] });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  const contextValue = useMemo(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners]
  );

  return (
    <SelectionRow
      {...attributes}
      style={style}
      {...props}
      wrapper={(tr: any) => {
        return (
          <RowContext.Provider value={contextValue}>
            {React.cloneElement(tr, { ref: setNodeRef })}
          </RowContext.Provider>
        );
      }}
    />
  );
};

const SortableTable = () => {
  const [dataSource, setDataSource] = React.useState(initialData);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prevState) => {
        const activeIndex = prevState.findIndex(
          (record) => record.key === active?.id
        );
        const overIndex = prevState.findIndex(
          (record) => record.key === over?.id
        );
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          // @ts-ignore
          components={{ Row: NewRow }}
          rowProps={(props) => {
            return { 'drag-index': props.key }
          }}
          primaryKey='key'
          columns={columns}
          dataSource={dataSource}
        />
      </SortableContext>
    </DndContext>
  );
};

export default SortableTable;
