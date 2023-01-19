import React, { useContext, useState } from "react";
import { Alert, Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import BorderBox from "../common/BorderBox";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import UserDataService from "../../services/UserService";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router";

function LoginForm() {
    const { loginUser, setJwtToken } = useContext(AppContext)
    const navigate = useNavigate();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const handleLogin = (e) => {
        e.preventDefault()


        if (!username || !password) {
            setError("Username and password is required!")
            return
        }

        UserDataService.login(username, password)
            .then((response) => {
                const user = response.data
                setJwtToken(response.headers.get("Authorization"))
                loginUser(user)
                navigate("/")
            }).catch((e) => {
                setError('E')
                return
            })

        setError('')
    }


    return (
        <Stack
            direction='column'
            alignItems='center'
        >
            <BorderBox
                component="form"
                width="sm"
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
                    label="Username"
                    id="username"
                    required
                    color="neutral"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    type="password"
                    label="Password"
                    id="password"
                    required
                    color="neutral"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Divider sx={{ mt: 2 }} />

                {error &&
                    <Alert
                        severity="error"
                        sx={{
                            mt: 1.5
                        }}
                    >
                        {error}
                    </Alert>
                }
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 1.5
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        color="neutral"
                        sx={{
                            color: 'white'
                        }}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </Box>
            </BorderBox>
        </Stack>
    )

}

export default LoginForm