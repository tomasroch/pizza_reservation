import { Divider, Typography } from "@mui/material";
import React from "react";

function TextDivider(props) {

    return (
        <Divider sx={{ mt: 3, mb: 2 }} textAlign="left">
            <Typography variant="overline">{props.text}</Typography>
        </Divider>
    )
}

export default TextDivider