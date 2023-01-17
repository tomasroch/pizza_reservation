import React from "react";
import { Avatar, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function AddressCard(props) {

    return (
        <Card sx={{ display: 'flex' }} variant="outlined" >
            <CardMedia
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ bgcolor: 'darkBlue.main', mx: 2, width: 50, height: 50 }} >
                    <LocationOnIcon sx={{ color: "white" }} />
                </Avatar>
            </CardMedia>
            <Box mr={1} minWidth={0}>
                <CardContent>
                    <Typography variant="h6">
                        {props.street}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {props.postalCode + ' ' + props.city}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

export default AddressCard;