import { Alert, Button, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import BorderBox from "../common/BorderBox";
import TextDivider from "../common/TextDivider";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import UserDataService from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function RegisterForm() {
    const { showSnackbar } = useContext(AppContext)
    const navigate = useNavigate();
    const [lastName, setLastName] = useState()
    const [firstName, setFirstName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const validForm = () => {
        return lastName && firstName && email && phone && username && password
    }

    const handleRegister = () => {
        if (!validForm()) {
            setError("All fields must be filled")
            return
        }

        let data = { username: username, password: password, firstName: firstName, lastName: lastName, email: email, phone: phone }


        UserDataService.register(data)
            .then((result) => {
                showSnackbar("Registration was successful", 'success')
                navigate("/")
                return
            }).catch((err) => {
                setError("Failed to create new customer account")
                return
            });

        setError("")
    }

    return (
        <Stack
            direction='column'
            alignItems='center'
        >
            <BorderBox
                component="form"
            >
                <Typography
                    variant="h4"
                    color="textSecondary"
                    component="h2"
                    gutterBottom
                >
                    New registration
                </Typography>
                <TextDivider text="Contact information" />
                <Grid
                    container
                    direction="row"
                    spacing={2}
                >
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First name"
                            id="firstName"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last name"
                            id="lastName"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Mobile phone"
                            id="phone"
                            required
                            inputProps={{ maxLength: 9 }}
                            color="neutral"
                            fullWidth
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            id="email"
                            type="email"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>

                </Grid>

                <TextDivider text="Registration information" />

                <Grid
                    container
                    direction="row"
                    spacing={2}
                >
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Username"
                            id="username"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="password"
                            label="Password"
                            id="password"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>
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
                    mt={2}
                    display="flex"
                    justifyContent="right"
                >
                    <Button
                        onClick={handleRegister}
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        color="neutral"
                        sx={{
                            color: 'white'
                        }}
                    >
                        Register
                    </Button>

                </Box>
            </BorderBox>
        </Stack>
    )
}

export default RegisterForm