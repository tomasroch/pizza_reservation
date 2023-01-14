import { Alert, Snackbar } from "@mui/material";
import React, { useImperativeHandle, useState } from "react";

function AlertSnackbar(props) {

    return (
        <Snackbar open={props.openSnackbar} autoHideDuration={4000} onClose={props.handleClose}>
            <Alert severity={props.severity} onClose={props.handleClose} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}

export default AlertSnackbar;