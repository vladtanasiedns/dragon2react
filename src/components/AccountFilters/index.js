import { Box, Button, Dialog, DialogActions, DialogContent, Grid, DialogTitle, TextField, Autocomplete } from "@mui/material";
import React, { useState } from "react"
import { GridColumn } from "../../utils/GridColumn";

export const AccountsFiltersDialog = () => {
    const [open, setOpen] = useState(false);
    const [timeZones] = useState(["test", "test1", "test2"]);
    const [filters, setFilters] = useState({
        buckets: "()",
        client: "",
        clientReferencePref: "",
        continent: "",
        debtorAddressPref: "",
        debtorNamePref: "",
        debtorNumberPref: "",
        debtorPhonePref: "",
        deskPref: "007",
        endAssignmentDate: "",
        endInvoiceDate: "",
        endReviewDate: "",
        filterByConsumerFlag: "",
        invoiceNumberPref: "",
        limit: "25",
        matchStrategy: "true",
        maxInvoiceBalance: "",
        maxInvoicePastDueBucket: "",
        maxTotalPastDue: "",
        minInvoiceBalance: "",
        minTiePref: "ALL",
        minTotalPastDue: "",
        offset: "0",
        ownerDocumentBody: "null",
        preferencesForm: "null",
        preferencesFormButton: "",
        preferencesFormResetButton: "",
        priorityPref: "",
        searchByPo: "",
        searchByPrediction: "",
        searchByPriority: "",
        searchByRank: "",
        searchByReqNo: "",
        showTiePref: "SHOW",
        startAssignmentDate: "",
        startInvoiceDate: "",
        startReviewDate: "",
        statusClassPref: "",
        statusPref: "()",
        timeZonePref: "",
        userId: "TVD",
        userMode: "collection"
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePreferencesChange = (e, key=null, value=null) => {
        console.log(e);
        if (key && value) {
            const prevState = filters;
            prevState[key] = value;
            setFilters({...prevState});
        }   
    }

    return <>
        <Box>
          <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickOpen} size='small'>
            Account Filters 
          </Button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg'>
                <DialogTitle>Account Filters</DialogTitle>
                <DialogContent>
                    <Grid container justifyContent='center' columnSpacing={1} style={{marginTop: '20px'}}>
                        <GridColumn>
                            <TextField
                                id="deskPref"
                                name="deskPref"
                                label="Desk"
                                type="text"
                                size='small'
                                onChange={(e) => handlePreferencesChange(e)}
                            />
                            <TextField
                                id="debtorNumberPref"
                                name="debtorNumberPref"
                                label="Debtor number"
                                type="text"
                                size='small'
                            />
                            <TextField 
                                type="date"
                                id="startReviewDate"
                                name="startReviewDate"
                                label="Start review date"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <TextField
                                id="debtorAddressPref"
                                name="debtorAddressPref"
                                label="Address"
                                type="text"
                                size='small'
                            />
                            <TextField 
                                type="date"
                                id="startInvoiceDate"
                                name="startInvoiceDate"
                                label="Start Invoice"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <TextField
                                id="showOneTiePerGrp"
                                label="Show one tie per group"
                                type="text"
                                size='small'
                            />
                        </GridColumn>
                        <GridColumn>
                            <TextField
                                id="clientId"
                                label="Client Id"
                                type="text"
                                size='small'
                            />
                            <TextField
                                id="clientReference"
                                label="Client reference"
                                type="text"
                                size='small'
                            />
                            <TextField 
                                type="date"
                                id="endReviewDate"
                                name="endReviewDate"
                                label="End review date"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                size="small"
                                options={timeZones}
                                renderInput={(params) => <TextField {...params} label="Timezone" />}
                                fullWidth
                            />
                            <TextField 
                                type="date"
                                id="endInvoiceDate"
                                name="endInvoiceDate"
                                label="End Invoice"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <Autocomplete
                                disablePortal
                                id="showTiePref"
                                size="small"
                                options={['SHOW', 'DONT SHOW']}
                                onChange={(e, value) => handlePreferencesChange(e, value)}
                                renderInput={(params) => <TextField {...params} label="Show tied accounts" />}
                                fullWidth
                            />
                        </GridColumn>
                        <GridColumn>
                            <Autocomplete
                                disablePortal
                                id="statusClassPref"
                                size="small"
                                options={['NEW', 'PIF', 'PTP']}
                                renderInput={(params) => <TextField {...params} label="Select statuses" />}
                                fullWidth
                            />
                            <TextField
                                id="name"
                                label="Name"
                                type="text"
                                size='small'
                                fullWidth
                            />
                            <TextField 
                                type="date"
                                id="startAssignmentDate"
                                name="startAssignmentDate"
                                label="Start assign"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <Autocomplete
                                disablePortal
                                id="priorityPref"
                                size="small"
                                options={['1', '2', '3']}
                                renderInput={(params) => <TextField {...params} label="Select priority" />}
                                fullWidth
                            />
                            <TextField
                                id="minInvoiceBalance"
                                name="minInvoiceBalance"
                                label="Min invoice balance"
                                type="number"
                                size='small'
                                fullWidth
                            />
                            <TextField
                                id="minTotalPastDue"
                                name="minTotalPastDue"
                                label="Min total past due"
                                type="number"
                                size='small'
                                fullWidth
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                size="small"
                                options={['Europe', 'North America', 'South America', 'Asia', 'Africa', 'Oceania']}
                                renderInput={(params) => <TextField {...params} label="Selecy continent" />}
                                fullWidth
                            />
                        </GridColumn>
                        <GridColumn>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                size="small"
                                options={['1', '2', '3', '4', '5']}
                                renderInput={(params) => <TextField {...params} label="Status class" />}
                                fullWidth
                            />
                            <TextField
                                id="debtorPhonePref"
                                name="debtorPhonePref"
                                label="Phone"
                                type="number"
                                size='small'
                                fullWidth
                            />
                            <TextField 
                                type="date"
                                id="endAssignmentDate"
                                name="endAssignmentDate"
                                label="End assign"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <TextField
                                id="invoiceNumberPref"
                                name="invoiceNumberPref"
                                label="Invoice number"
                                type="text"
                                size='small'
                                fullWidth
                            />
                            <TextField
                                id="maxInvoiceBalance"
                                name="maxInvoiceBalance"
                                label="Max invoice balance"
                                type="number"
                                size='small'
                                fullWidth
                            />
                            <TextField
                                id="maxTotalPastDue"
                                name="maxTotalPastDue"
                                label="Max total past due"
                                type="number"
                                size='small'
                                fullWidth
                            />
                            <Autocomplete
                                disablePortal
                                id="maxInvoicePastDueBucket"
                                size="small"
                                options={['1', '2', '3', '4', '5']}
                                renderInput={(params) => <TextField {...params} label="Max invoice past due bucket" />}
                                fullWidth
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                size="small"
                                options={['0-30', '30-60', '60-120', '120-180', '180-360', '360+']}
                                renderInput={(params) => <TextField {...params} label="Select buckets" />}
                                fullWidth
                            />
                        </GridColumn>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">Cancel</Button>
                    <Button onClick={handleClose} variant="contained">Apply</Button>
                </DialogActions>
            </Dialog>
        </Box>
    </>
}