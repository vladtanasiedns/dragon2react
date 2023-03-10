import { Grid } from "@mui/material";
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import TabsButtonGroup from "../../TabsButtonGroup";
import HistoryWidget from "../HistoryWidget";
import AchWidget from "../AchWidget";

const WorkCardView = () => {
    return (<Grid container direction='column'>
    <MemoryRouter>
      <Grid container justifyContent='center'>
        <TabsButtonGroup buttons={['History', 'ACH', 'Debtor', 'Addresses', 'Invoices', 'Documents', 'Subscriptions', 'Tied Accounts', 'Calls', 'Client', 'Languages', 'Statistics', 'Cs Tickets']}/>
      </Grid>
      <Grid container> 
        <Routes>
          <Route exact path='' element={<HistoryWidget />}/>
          <Route exact path='ach' element={<AchWidget />}/>
        </Routes>
      </Grid>
    </MemoryRouter>
  </Grid>);
}

export default WorkCardView;