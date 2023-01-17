import React from "react";
import BorderBox from "./BorderBox";
import { Container, Stack } from "@mui/material";

function TabPanel(props) {

    return (
        <Stack
            direction='column'
            alignItems='center'
            mt={3}
        >
            {props.value === props.index && (
                <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center' }}>
                    {props.children}
                </Container>
            )}
        </Stack>
    );
}

export default TabPanel;