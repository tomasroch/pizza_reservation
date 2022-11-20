import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";

export default function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const handleLogin = (e) => {
        e.preventDefault()

        if (!username || !password) {
            setError("Username and password is required!")
            return
        }

        axios.post("http://localhost:8080/login", {
            username: username,
            password: password
        }).then(response => {
            // TODO
        }, (error) => {
            setError("Invalid credentials.")
        })

        setError('')
    }


    return (
        <Layout center>
            <Box
                component="form"
                noValidate
                maxWidth="sm"
                pb={5}
            >
                <Paper
                    elevation={5}
                    sx={{
                        px: 6,
                        py: 3,
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    px={5}
                >
                    <Typography
                        variant="h4"
                        color="textSecondary"
                        component="h2"
                        gutterBottom
                    >
                        Login
                    </Typography>
                    <TextField
                        type="email"
                        label="Email"
                        id="email"
                        required
                        color="info"
                        margin="normal"
                        fullWidth
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        id="password"
                        required
                        color="info"
                        margin="normal"
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error &&
                        <Typography
                            variant="caption"
                            sx={{
                                backgroundColor: 'primary.secondary',
                                color: 'primary.main',
                                px: 1,
                                py: 0.5,
                                mt: 1
                            }}

                        >
                            {error}
                        </Typography>
                    }

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 2
                        }}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </Paper>
            </Box>
        </Layout>
    )
}
