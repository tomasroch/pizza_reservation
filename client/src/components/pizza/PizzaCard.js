import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

function PizzaCard(props) {
    const defaultBtnText = 'Add to cart'
    const [buttonText, setButtonText] = useState(defaultBtnText)
    const [buttonIcon, setButtonIcon] = useState()

    const handleAddItem = (e) => {
        e.preventDefault()
        const pizza = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: 1
        }
        props.addPizza(pizza)
        setButtonText('Added')
        setButtonIcon(<DoneIcon />)
        setTimeout(() => {
            setButtonText(defaultBtnText)
            setButtonIcon()
        }, 2500)
    }

    return (
        <Card elevation={0} sx={{ maxWidth: 350, minWidth: 300, }}>
            <CardMedia
                component="img"
                title=""
                image="/img/pizza.png"

            />
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="h5" sx={{ flexGrow: 1, pl: 1 }} >
                    {props.price},-
                </Typography>
                <Button
                    size="medium"
                    variant="contained"
                    startIcon={buttonIcon}
                    onClick={handleAddItem}
                >
                    {buttonText}
                </Button>
            </CardActions>
        </Card>
    );
}

export default PizzaCard;