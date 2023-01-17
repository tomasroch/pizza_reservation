import { Alert, Snackbar } from "@mui/material";
import React from "react";

function AlertSnackbar(props) {

    return (
        <Snackbar open={props.openSnackbar} autoHideDuration={10000} onClose={props.handleClose}>
            <Alert severity={props.severity} onClose={props.handleClose} variant='filled' sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}

export default AlertSnackbar;