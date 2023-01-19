import React, { useContext, useState } from "react";
import { Alert, Box, Button, CircularProgress, Divider, Grid, TextField, Typography, } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import BorderBox from "../common/BorderBox";
import { AppContext } from "../../context/AppContext";
import TextDivider from "../common/TextDivider";
import OrderDataService from "../../services/OrderService"
import { useNavigate } from "react-router";
import { validNumberField } from "../../services/CommonUtils";

function CustomerForm() {
    const { cartItems, showSnackbar, clearCart, currentUser } = useContext(AppContext)
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const validFormFields = () => {
        return street && city && postalCode && (currentUser || (firstName && lastName && email && phoneNo))
    }

    const createOrder = (e) => {
        e.preventDefault()
        if (!validFormFields()) {
            setError('All fields must be filled')
            return
        }

        setLoading(true)

        const orderItems = new Map();
        cartItems.forEach(pizza => {
            orderItems[pizza.id.toString()] = pizza.amount.toString()
        })

        const data = {
            city: city,
            street: street,
            postalCode: postalCode,
            pizzaAmount: orderItems,
        }

        if (!currentUser) {
            data.firstName = firstName
            data.lastName = lastName
            data.email = email
            data.phone = phoneNo
        } else {
            data.customerId = currentUser.customer.id
        }

        OrderDataService.createOrder(data)
            .then((response) => {
                showSnackbar('The order was successfully created', 'success')
                clearCart()
                navigate("/order/" + response.data.id)
                return
            }).catch((e) => {
                setError('Failed to create order')
                return
            })

        setLoading(false)

        setError('')
    }

    if (cartItems.length > 0) {
        return (
            <BorderBox
                component='form'
                width='100%'
            >
                <Typography
                    variant="h4"
                    mt={2}
                >
                    Finish Order
                </Typography>
                {!currentUser &&
                    <div>
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
                                    value={phoneNo}
                                    color="neutral"
                                    fullWidth
                                    onChange={(e) => validNumberField(e, setPhoneNo)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                }
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
                            value={postalCode}
                            color="neutral"
                            fullWidth
                            onChange={(e) => validNumberField(e, setPostalCode)}
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

                {loading ?
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 3
                        }}
                    >
                        <CircularProgress />
                    </Box>
                    :
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
                }
            </BorderBox >
        )
    } else {
        return (
            <div />
        )
    }


}

export default CustomerForm;