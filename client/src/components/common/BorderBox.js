import { Box } from "@mui/material";
import React from "react";

function BorderBox(props) {
    return (
        <Box
            component={props.component}
            maxWidth={props.maxWidth ? props.maxWidth : 'md'}
            p={props.padding ? props.padding : 3}
            m={props.m}
            sx={{
                border: 1,
                borderRadius: 2,
                bgcolor: 'white',
                borderColor: 'gray.main',
            }}
            width={props.width}
        >
            {props.children}
        </Box>
    )
}

export default BorderBox