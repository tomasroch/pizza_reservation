import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

function PizzaCard(props) {

    return (
        <Card sx={{ maxWidth: 350, minWidth: 300 }}>
            <CardMedia
                component="img"
                title=""
                image="/img/pizza.png"
                height="160"
            />
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {props.ingredients}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="h5" sx={{ flexGrow: 1, pl: 1 }} >
                    {props.price},-
                </Typography>
                <Button size="medium" variant="contained" onClick={() => props.addPizza(props.id, 1)}>Add to cart</Button>
            </CardActions>
        </Card>
    );
}

export default PizzaCard;