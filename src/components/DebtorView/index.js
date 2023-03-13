import { Stack, Grid, Typography } from "@mui/material";
import { GridColumn } from "../../utils/GridColumn";
import { useContext, useEffect } from "react";
import { DebtorContext, actions } from '../../context/DebtorContext';

const DebtorDataView = () => {
    const { state, dispatch } = useContext(DebtorContext);

    useEffect(() => {
        console.log(state.currentDebtor);
    }, [state.currentDebtor]);

    const getDebtor = async () => {
        await dispatch({
            type: actions.SELECT_DEBTOR,
            debtorNumber: '0028396'
        });
    }

    return <>
        <Grid container spacing={5} justifyContent='center' sx={{ border: '1px solid gray', marginTop: '5px'}}>
                <GridColumn>
                    <Typography>Debtor number: {state.currentDebtor.debtorNumber || 'none'}</Typography>
                    <Typography>Test: TEST</Typography>
                </GridColumn>
                <GridColumn>
                    <Typography>Test: TEST</Typography>
                    <Typography>Test: TEST</Typography>
                </GridColumn>
                <GridColumn>
                    <Typography>Test: TEST</Typography>
                    <Typography>Test: TEST</Typography>
                </GridColumn>
                <Grid><button onClick={getDebtor}>Get a debtor!</button></Grid>
                
        </Grid>
    </>
}

const DebtorView = () => {
    return (<Stack direction='column' justifyContent="center" alignItems="center" spacing={2}>
        <DebtorDataView />
    </Stack>);
}

export default DebtorView;