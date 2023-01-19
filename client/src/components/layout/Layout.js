import React from "react";
import { Container, Divider, Typography } from "@mui/material";

function Layout(props) {


    return (
        <Container
            maxWidth={props.size ? props.size : 'xl'}
            sx={{
                pt: props.title ? 10 : 15,
                pb: 20,
                minHeight: 1000,
            }}
        >
            {props.title && <Divider sx={{ mt: 3, mb: 2 }} >
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    {props.title}
                </Typography>
            </Divider>
            }

            {props.children}
        </Container>
    )
}

export default Layout;