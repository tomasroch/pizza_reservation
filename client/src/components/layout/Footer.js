import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Box
                bgcolor='black'
                color='white'
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} pb={5}>
                        <Grid item xs={12} md={4}>
                            <Box>
                                Account
                            </Box>
                            <Box>
                                <Link to="login" color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link to="login" color="inherit">
                                    Login
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>

                        </Grid>
                        <Grid item xs={12} md={4}>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;