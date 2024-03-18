import { CodeMirrorEditor, EnableSwitch } from '@ak/react-components';
import request from '@ak/utils';

const get = request.fetchGet;

function App() {
  const enableStatus = () => {
    return get('/test', {});
  };
  return (
    <>
      <EnableSwitch request={enableStatus} />
      <CodeMirrorEditor />
    </>
  );
}

export default App;
