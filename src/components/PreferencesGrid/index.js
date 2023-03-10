import React, { useEffect } from 'react';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import PlaceHolderData from '../../placeholderdata';
import { Box } from '@mui/system';

const PreferencesGrid = () => {
    const columns = [
        { field: 'debtorNumber', headerName: 'Debtor Number', minWidth: 150 },
        { field: 'name', headerName: 'Name', minWidth: 150 },
        { field: 'client', headerName: 'Client Id', minWidth: 150 },
        { field: 'account', headerName: 'Client Reference', minWidth: 150 },
        { field: 'status', headerName: 'Status', minWidth: 30 },
        { field: 'desk', headerName: 'Desk', minWidth: 30 },
        { field: 'assignDate', headerName: 'Assignment Date', minWidth: 100 },
        { field: 'reviewDate', headerName: 'Review Date', minWidth: 150 },
        { field: 'assigned', headerName: 'Total Assigned', minWidth: 150 },
        { field: 'totalPastDue', headerName: 'Total Past Due', minWidth: 150 },
        { field: 'currency', headerName: 'Currency', minWidth: 150 },
        { field: 'max_inv_past_due_bucket', headerName: 'Past Due Bucket', minWidth: 150 },
    ]

    useEffect(() => {
    }, []);

    return <Box sx={{ height: '100%' }}>
        <DataGridPro 
            getRowId={row => row.totalPastDue}
            columns={columns} 
            rows={PlaceHolderData.debtors.items}
            density='compact'
            slots={{ toolbar: GridToolbar }}
            checkboxSelection 
            disableRowSelectionOnClick
        />
    </Box>
}

export default PreferencesGrid;