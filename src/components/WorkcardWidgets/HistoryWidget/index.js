import React, { useContext, useEffect, useState } from 'react';
import { Box } from "@mui/system"
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
// import { DataGrid } from '@mui/x-data-grid';
import { actions, DebtorContext } from '../../../../src/context/DebtorContext';

const HistoryWidget = () => {
  const { state, dispatch } = useContext(DebtorContext);
  const [debtors, setDebtors] = useState([]);

const columns = [
    { field: 'date', headerName: 'Date', minWidth: 100 },
    { field: 'user', headerName: 'User', minWidth: 90 },
    { field: 'action', headerName: 'Action', minWidth: 90 },
    { field: 'status', headerName: 'Status', minWidth: 90 },
    { field: 'desk', headerName: 'Desk', minWidth: 90 },
    { field: 'notes', headerName: 'Note', minWidth: 250 },
  ];
  
useEffect(() => {
    dispatch({
        type: actions.SELECT_DEBTOR_NOTES
    });
    setDebtors(state.currentDebtorNotes);
}, []); 
    return (
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGridPro
            getRowId={row => row.date}
            rows={state.currentDebtorNotes}
            columns={columns}
            initialState={{
                pagination: {
                  paginationModel: { pageSize: 25, page: 0 },
                },
              }}
            pageSizeOptions={[5,10,25]}
            checkboxSelection
            disableRowSelectionOnClick
        />
        </Box>
    )
}
export default HistoryWidget;