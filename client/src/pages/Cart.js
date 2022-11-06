import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [postalCode, setPostalCode] = useState();


    const createOrder = () => {
        axios.post("http://localhost:8080/api/order/create", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneNo,
            postalCode: postalCode,
            city: city,
            street: street,
            pizzaAmount: {
                1: 1,
                2: 2
            }

        }).then(
            (response) => {
                console.log('succes')
            },
            (error) => {
                console.log('err')
            }
        )
    }

    return (
        <Layout title="Cart">

            <Box
                component="form"
                noValidate
                maxWidth="sm"
                pb={2}
            >
                <Divider sx={{ mt: 3, mb: 2 }} textAlign="left">
                    User information
                </Divider>
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
                            type="email"
                            label="Email"
                            id="email"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            inputProps={{ maxLength: 9 }}
                            type="tel"
                            label="Mobile phone"
                            id="phoneNo"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setPhoneNo(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 3, mb: 2 }} textAlign="left">
                    Address
                </Divider>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                >
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Street with House number"
                            id="street"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="City"
                            id="city"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            inputProps={{ maxLength: 5 }}
                            label="Zip/Postal Code"
                            id="postalCode"
                            required
                            color="neutral"
                            fullWidth
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 2 }} />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row-reverse',
                        mt: 3,
                    }}
                >
                    <Button
                        onClick={createOrder}
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        color="neutral"
                        sx={{
                            color: 'white'
                        }}
                    >
                        Confirm Order
                    </Button>
                    <Button
                        onClick={createOrder}
                        variant="outlined"
                        size="large"
                        startIcon={<ArrowBackIcon />}
                        component={Link}
                        to="/menu"
                        color="neutral"
                    >
                        Back to menu
                    </Button>
                </Box>
            </Box>
        </Layout >
    );
}

export default Cart;