import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../layout/Layout";
import OrderService from "../../services/OrderService";
import BorderBox from "../common/BorderBox";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import UserDataBox from "../user/UserDataBox";
import AddressCard from "../address/AddressCard";
import OrderDetailCard from "./OrderDetailCard";
import PizzaList from "../pizza/PizzaList";
import { AppContext } from "../../context/AppContext";
import { EMPLOYEE_ROLE } from "../../services/CommonUtils";
import OrderStatusSelect from "./OrderStatusSelect";

function OrderDetail() {
    const { currentUser, showSnackbar } = useContext(AppContext)
    const [order, setOrder] = useState()
    const { id } = useParams()
    const [newStatus, setNewStatus] = useState()

    useEffect(() => {
        OrderService.readOrder(id)
            .then((result) => {
                setOrder(result.data)
                setNewStatus(result.data.status)
            }).catch((err) => {
                console.log(err)
            });
    }, [id])

    const handleChange = (e) => {
        setNewStatus(e.target.value)

        OrderService.changeOrderStatus(id, e.target.value)
            .then((response) => {
                showSnackbar('Order status changed to ' + e.target.value, 'success')
            })
            .catch((e) => {
                setNewStatus(order.status)
                showSnackbar('Failed to change order status', 'warning')
            })
    }

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
                                <Typography variant="h5" ml={2}>
                                    Order {id}
                                </Typography>
                                {(currentUser && EMPLOYEE_ROLE.includes(currentUser.role)) ?
                                    <OrderStatusSelect handleChange={handleChange} filter={newStatus} size="small" width={200} ml={3} />
                                    :
                                    <Typography variant="h5" ml={2}>
                                        - {order.status}
                                    </Typography>
                                }
                            </Box>
                            <Typography sx={{ pl: 1 }}>
                                Details
                            </Typography>
                            <OrderDetailCard {...order} />

                            <Typography sx={{ pl: 1 }}>
                                Customer
                            </Typography>
                            <UserDataBox customer={order.customer} />
                            <Typography sx={{ pl: 1 }}>
                                Delivery address
                            </Typography>
                            <AddressCard {...order.address} />
                            <Typography sx={{ pl: 1 }}>
                                Items
                            </Typography>
                            <PizzaList items={order.orderItems} />
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