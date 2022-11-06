import React from "react";
import { Container, Divider, Typography } from "@mui/material";

function Layout(props) {
    return (
        <Container
            maxWidth={props.size ? props.size : 'lg'}
            sx={{
                pt: 10,
                pb: 5,
                backgroundColor: 'white'
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