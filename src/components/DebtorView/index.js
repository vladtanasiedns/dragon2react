import { Stack, Grid, Typography, Paper, Card } from "@mui/material";
import { GridColumn } from "../../utils/GridColumn";

const DebtorDataView = () => {
    return <>
        <Grid container spacing={5} justifyContent='center' sx={{ border: '1px solid gray', marginTop: '5px'}}>
                <GridColumn>
                    <Typography>Test: TEST</Typography>
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
        </Grid>
    </>
}

const DebtorView = () => {
    return (<Stack direction='column' justifyContent="center" alignItems="center" spacing={2}>
        <DebtorDataView />
    </Stack>);
}

export default DebtorView;