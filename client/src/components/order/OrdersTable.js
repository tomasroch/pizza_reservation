import { Card, IconButton, Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BorderBox from "../common/BorderBox";
import InfoIcon from '@mui/icons-material/Info';
import { Link as MuiLink } from "@material-ui/core";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";

function OrdersTable(props) {

    const toLowerCase = (text) => {
        return text.charAt(0) + text.substring(1).toLowerCase()
    }

    return (
        <BorderBox>
            <Stack spacing={2}>
                <Typography variant="h6" sx={{ mb: 1 }}>{props.title}</Typography>
                <Card
                    variant="outlined"
                >
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
                            <Table>
                                <TableBody>
                                    {props.orders.map((row) => (
                                        <TableRow
                                            sx={{
                                                ':hover': {
                                                    bgcolor: grey[200]
                                                }
                                            }}
                                            key={row.id}
                                        >
                                            <TableCell>
                                                <MuiLink
                                                    component={Link}
                                                    to={'/order/' + row.id}
                                                    color="inherit"
                                                >
                                                    {row.id}
                                                </MuiLink>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="subtitle2" color="text.secondary">
                                                    {row.created}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="subtitle2">
                                                    {row.price + ',-'}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="subtitle2">
                                                    {toLowerCase(row.status)}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton
                                                    component={Link}
                                                    to={'/order/' + row.id}
                                                    sx={{ color: 'primary.main' }}
                                                >
                                                    <InfoIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                </Card>
            </Stack>
        </BorderBox>
    )
}

export default OrdersTable;