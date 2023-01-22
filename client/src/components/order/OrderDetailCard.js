import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import { formatDate } from "../../services/CommonUtils";

function OrderDetailCard(props) {

    return (
        <Card
            sx={{
                display: 'flex',
                border: 1,
                borderColor: 'gray.main',
                borderRadius: 2,
            }}
            variant="outlined"
        >
            <Grid
                container
                direction='row'
                m={2}
                alignItems='center'
            >
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        Total price:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" color="text.secondary">
                        {props.price} ,-
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        Created:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" color="text.secondary">
                        {formatDate(props.created)}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        Estimated delivery:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" color="text.secondary">
                        {formatDate(props.estimatedDelivery)}
                    </Typography>
                </Grid>
                {props.updated && <div>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">
                            Updated:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="subtitle1" color="text.secondary">
                            {formatDate(props.updated)}
                        </Typography>
                    </Grid>
                </div>
                }
            </Grid>
        </Card>
    )
}

export default OrderDetailCard;