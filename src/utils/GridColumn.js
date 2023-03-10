import React from "react";
import { Grid } from "@mui/material";

export const GridColumn = (props) => {
    return <>
        <Grid item>
            <Grid container direction='column' spacing={1}>
                {React.Children.map(props.children, (child) => <Grid item>{ child }</Grid>)}
            </Grid>
        </Grid>
    </>
}