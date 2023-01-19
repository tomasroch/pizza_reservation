import { Box, Divider, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField, Tooltip, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import BorderBox from "../common/BorderBox";
import DeleteIcon from '@mui/icons-material/Delete';

function CartItemsTable() {
    const [totalPrice, setTotalPrice] = useState(0);
    const { cartItems, removeItem, showSnackbar, clearCart, changeItemAmount } = useContext(AppContext)

    const calculateTotalPrice = () => {
        let totalPrice = 0
        cartItems.forEach(function (item, index) {
            totalPrice += item.price * item.amount
        })
        setTotalPrice(totalPrice)
    }

    useEffect(() => {
        calculateTotalPrice()
    })

    const handleRemoveItem = (id) => {
        removeItem(id)
        showSnackbar('Removed!', 'warning')
        calculateTotalPrice()
    }

    const handleClearCart = () => {
        clearCart()
        showSnackbar('All items removed from cart', 'info')
        calculateTotalPrice()
    }

    return (
        <BorderBox>
            <Typography
                variant="h4"
                my={1}
            >
                Cart
            </Typography>
            <Box
                sx={{
                    overflow: "auto"
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "table",
                        tableLayout: "fixed"
                    }}
                >
                    {cartItems.length > 0 ?
                        <div>
                            <Table>
                                <colgroup>
                                    <col width="35%" />
                                    <col width="10%" />
                                    <col width="30%" />
                                    <col width="15%" />
                                    <col width="10%" />
                                </colgroup>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Product
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                        >
                                            Price
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                        >
                                            Quantity
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                        >
                                            Total Price
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                        >
                                            <Tooltip title="Clear cart">
                                                <IconButton onClick={() => handleClearCart()} color="primary">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartItems.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell align="right">{row.price.toFixed(2)},-</TableCell>
                                            <TableCell align="right">
                                                <TextField
                                                    value={row.amount}
                                                    onChange={(e) => changeItemAmount(row.id, Number(e.target.value))}
                                                    type="number"
                                                    size="small"
                                                    InputLabelProps={{ shrink: true }}
                                                />
                                            </TableCell>
                                            <TableCell align="right">{(row.price * row.amount).toFixed(2)},-</TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => handleRemoveItem(row.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Box
                                mt={2}
                                textAlign='right'
                            >
                                <Typography
                                    variant="h6"
                                >
                                    Total price: {totalPrice.toFixed(2)},-
                                </Typography>
                            </Box>
                        </div>
                        :
                        <div>
                            <Divider />
                            <Typography mt={1}>Cart is empty :(</Typography>
                        </div>
                    }
                </Box>
            </Box>
        </BorderBox>
    )
}
export default CartItemsTable