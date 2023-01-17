import { Avatar, Box, CircularProgress, Divider, Grid, Paper, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import UserService from "../../services/UserService";
import { red } from "@mui/material/colors";
import AddressCard from "../address/AddressCard";
import { AppContext } from "../../context/AppContext";
import BorderBox from "../common/BorderBox";
import UserDataBox from "./UserDataBox";

function UserInfo(props) {
    const { currentUser } = useContext(AppContext)
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(true)

    const loadUserAddresses = () => {
        // TODO
        /*UserService.readAllAddresses()
            .then((result) => {
                setAddresses(result.data)
            }).catch((e) => {
                console.log(e)
            })*/
        setAddresses(UserService.readAllAddresses())
        setLoading(false)
    }

    useEffect(() => {
        loadUserAddresses()
    }, [])

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
                            <Typography variant="subtitle2" display='block' color="primary" sx={{ mb: 2 }}>{currentUser.firstName + ' ' + currentUser.lastName}</Typography>
                            <UserDataBox user={currentUser} />
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