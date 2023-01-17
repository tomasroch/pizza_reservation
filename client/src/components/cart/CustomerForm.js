import React, { useContext, useState } from "react";
import { Alert, Box, Button, Divider, Grid, TextField, Typography, } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import axios from "axios";
import BorderBox from "../common/BorderBox";
import { AppContext } from "../../context/AppContext";
import TextDivider from "../common/TextDivider";

function CustomerForm() {
    const { cartItems } = useContext(AppContext)

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [postalCode, setPostalCode] = useState();
    const [error, setError] = useState();

    const validFormFields = () => {
        return firstName && lastName && email && phoneNo && street && city && postalCode
    }


    const createOrder = () => {

        if (!validFormFields()) {
            setError('All fields must be filled')
            return
        }

        const orderItems = new Map(
            cartItems.map(pizza => {
                return [pizza.pizzaId, pizza.amount]
            })
        )

        axios.post("http://localhost:8080/api/order/create", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneNo,
            postalCode: postalCode,
            city: city,
            street: street,
            pizzaAmount: orderItems

        }).then(
            (response) => {
                console.log('succes')
            },
            (error) => {
                setError('Failed to create order!')
                return;
            }
        )

        setError('')
    }

    if (cartItems.length > 0) {
        return (
            <BorderBox
                component='form'
            >
                <Typography
                    variant="h4"
                    mt={2}
                >
                    Finish Order
                </Typography>

                <TextDivider text="User information" />

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
                <TextDivider text="Address" />
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
            </BorderBox>
        )
    } else {
        return (
            <div />
        )
    }


}

export default CustomerForm;