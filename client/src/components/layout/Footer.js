import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Box
            bgcolor='black'
            color='white'
            sx={{
                py: 5
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} py={5}>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography variant="h6">
                                Contact us
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                <a href="https://www.facebook.com">
                                    Facebook
                                </a>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                <a href="https://www.instagram.com">
                                    Instagram
                                </a>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography variant="h6">
                                Account
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                <Link to="login" color="inherit">
                                    Login
                                </Link>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                <Link to="register" color="inherit">
                                    Register
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;