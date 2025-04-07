import React from 'react';
import Editor from './Editor';
import { v4 as uuidV4 } from 'uuid';

function App() {
  const documentId = uuidV4();
  return <Editor documentId={documentId} />;
}

export default App;
