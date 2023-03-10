import { Box } from '@mui/material';
import React from 'react';
import { DragonBar } from './components/DragonBar';
import PreferencesGrid from './components/PreferencesGrid';
import Split from 'react-split';
import DebtorView from './components/DebtorView';
import WorkCardView from './components/WorkcardWidgets/WorkCardView';
import './App.css';

function App() {
  return <Box sx={{ height: `100vh`, display: 'flex', flexFlow: 'column', overflow: 'hidden' }}>
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
            <div>
              <DebtorView />
            </div>
            <div>
              <WorkCardView />
            </div>
          </Split>
        </Box>
      </Split>
    </Box>;
}

export default App;
