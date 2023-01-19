import { Avatar, Box, CircularProgress, Divider, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import UserDataService from "../../services/UserService";
import { red } from "@mui/material/colors";
import AddressCard from "../address/AddressCard";
import { AppContext } from "../../context/AppContext";
import BorderBox from "../common/BorderBox";
import UserDataBox from "./UserDataBox";

function UserInfo() {
    const { currentUser } = useContext(AppContext)
    const { customer } = currentUser
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(true)

    const loadUserAddresses = () => {
        UserDataService.readAllCustomerAddresses(customer?.id)
            .then((response) => {
                setAddresses(response.data)
            })
            .catch((e) => {
                console.log(e)
            });

        setLoading(false)
    }

    useEffect(() => {
        loadUserAddresses()
    }, [customer?.id])

    return (
        loading ?
            <CircularProgress sx={{ position: 'absolute', }} />
            :
            <Grid
                container
                direction="row"
                justifyContent="center"
                spacing={1}
            >
                <Grid item md={12} lg={6}>
                    <BorderBox>
                        <Divider sx={{ m: 5 }} />
                        <Stack alignItems='center' mb={3}>
                            <Avatar sx={{ bgcolor: 'darkBlue.main', width: 70, height: 70 }} />
                            <Typography variant="h6" mt={2}>{currentUser.username}</Typography>
                            <Typography variant="subtitle2" display='block' color="primary" sx={{ mb: 2 }}>{customer.firstName + ' ' + customer.lastName}</Typography>
                            <UserDataBox customer={currentUser.customer} />
                        </Stack>
                    </BorderBox>
                </Grid>
                <Grid item md={12} lg={6}>
                    <BorderBox>
                        <Typography variant="h6">Delivery addresses</Typography>

                        {addresses.length > 0 ?
                            <Grid
                                container
                                direction="column"
                                wrap="nowrap"
                                spacing={1}
                                mt={1}
                            >
                                {addresses.map((address, i) => (
                                    <Grid key={i} item >
                                        <AddressCard  {...address} />
                                    </Grid>
                                ))}
                            </Grid>
                            :
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: 1
                                }}
                            >
                                <WarningAmberIcon sx={{ color: red[500], mr: 2 }} fontSize="large" />
                                <Typography>Any address</Typography>
                            </Box>
                        }
                    </BorderBox>
                </Grid>
            </Grid >
    )
}

export default UserInfo