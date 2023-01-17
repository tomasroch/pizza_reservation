import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../layout/Layout";
import OrderService from "../../services/OrderService";
import BorderBox from "../common/BorderBox";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import UserDataBox from "../user/UserDataBox";
import AddressCard from "../address/AddressCard";

function OrderDetail() {
    const [order, setOrder] = useState()
    const { id } = useParams()

    useEffect(() => {
        /*OrderService.readOrder(id)
            .then((result) => {
                setOrder(result.data)
            }).catch((err) => {
                console.log(err)
            });*/
        setOrder(OrderService.readOrder(id))
    }, [])

    return (
        <Layout>
            {order ?
                <Stack alignItems='center'>
                    <BorderBox>
                        <Stack
                            spacing={2}
                        >
                            <Box
                                sx={{ display: 'flex', alignItems: 'center', color: 'darkBlue.main' }}
                            >
                                <ShoppingBasketIcon fontSize="large" />
                                <Typography variant="h6" ml={2}>
                                    Order {id}
                                </Typography>
                            </Box>
                            <Typography>
                                Details
                            </Typography>
                            <UserDataBox user={order.customer} />
                            <Typography>
                                Delivery address
                            </Typography>
                            <AddressCard {...order.address} />
                        </Stack>
                    </BorderBox>
                </Stack>
                :
                <div></div>
            }
        </Layout>
    )
}

export default OrderDetail;