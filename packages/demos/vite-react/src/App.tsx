import { CodeMirrorEditor, EnableSwitch, EditTable } from '@ak/react-components';
import request from '@ak/utils';
import { columns, data } from './components/tableData';

const get = request.fetchGet;

function App() {
  const enableStatus = () => {
    return get('/test', {});
  };
  return (
    <>
      <EnableSwitch request={enableStatus} />
      
      <CodeMirrorEditor />

      {/* <SortableTable /> */}
      <EditTable columns={columns} dataSource={data} />
    </>
  );
}

export default App;
