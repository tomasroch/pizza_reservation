import { Box } from "@mui/material";
import React from "react";

function BorderBox(props) {
    return (
        <Box
            component={props.component}
            maxWidth={props.width ? props.width : 'md'}
            p={3}
            sx={{
                border: 1,
                borderRadius: 2,
                borderColor: 'gray.main'
            }}
        >
            {props.children}
        </Box>
    )
}

export default BorderBox