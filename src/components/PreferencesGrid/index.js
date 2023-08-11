import React, { useContext, useEffect, useState } from 'react';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import { actions, DebtorContext } from '../../context/DebtorContext';

const PreferencesGrid = () => {
    const { state, dispatch } = useContext(DebtorContext);
    const [debtors, setDebtors] = useState([]);
    const { getAccessTokenSilently } = useAuth0();

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

    const getDebtors = async () => {
        try {
            const response = await axios.get('https://local-dragon.dandsltd.com/dav1/debtor_list/preferences/?deskPref=&client=TEST01&statusClassPref=&debtorNumberPref=&clientReferencePref=&debtorNamePref=&debtorPhonePref=&startReviewDate=&endReviewDate=&startAssignmentDate=&endAssignmentDate=&debtorAddressPref=&timeZonePref=&priorityPref=&invoiceNumberPref=&startInvoiceDate=&endInvoiceDate=&minInvoiceBalance=&maxInvoiceBalance=&minTiePref=ALL&showTiePref=SHOW&minTotalPastDue=&maxTotalPastDue=&searchByPo=&searchByReqNo=&continent=&maxInvoicePastDueBucket=&searchByPriority=&searchByRank=&searchByPrediction=&filterByConsumerFlag=&preferencesFormButton=&preferencesFormResetButton=&statusPref=()&buckets=()&ownerDocumentBody=null&preferencesForm=null&userId=TVD&userMode=collection&matchStrategy=true&offset=0&limit=25', {
                headers: {
                    Authorization: `Bearer ${await getAccessTokenSilently()}`,
                    Accept: "application/json"
                }
            });
            console.log(response.data);
            return response.data.items;
        } catch (error) {
           console.log(error);
        }
    }

    useEffect(() => {
        const fetchDebtors = async () => {
            const debtors = await getDebtors();
            dispatch({ type: actions.GET_DEBTORS, payload: debtors });
        }
        fetchDebtors();
        setDebtors(state.preferencesList);
    }, []);

    return <Box sx={{ height: '100%' }}>
        <DataGridPro
            getRowId={row => row.debtorNumber}
            columns={columns}
            rows={state.preferencesList}
            density='compact'
            slots={{ toolbar: GridToolbar }}
            pagination={true}
            pageSize={100}
            checkboxSelection
            disableRowSelectionOnClick
        />
    </Box>
}

export default PreferencesGrid;