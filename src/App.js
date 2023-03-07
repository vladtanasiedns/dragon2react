import { Box } from '@mui/material';
import React from 'react';
import { DragonBar } from './components/DragonBar';
import PreferencesGrid from './components/PreferencesGrid';
import Split from 'react-split';
import Styles from './App.css';

function App() {
  return <Box sx={{ height: `100vh`, display: 'flex', flexFlow: 'column' }}>
      <DragonBar />
      <Split
        className="split"
        direction="vertical"
        style={{ height: '100vh' }}
        sizes={[100,1]}
      >
        <PreferencesGrid />
        <Box>
          <Split direction='horizontal' style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
            <div>test1</div>
            <div>test2</div>
          </Split>
        </Box>
      </Split>
    </Box>;
}

export default App;
