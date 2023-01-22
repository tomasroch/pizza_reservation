import { Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

function PizzaList(props) {
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
            <List sx={{ width: '100%' }}>
                <Divider />
                {props.items.map((pizza, i) => (
                    <div key={i}>
                        <ListItem
                            secondaryAction={
                                <Typography>
                                    {pizza.amount + ' ks'}
                                </Typography>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <LocalPizzaIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={pizza.name} secondary={pizza.price + ',-'} />
                        </ListItem>
                        <Divider />
                    </div>
                ))
                }
            </List>
        </Card>
    )
}

export default PizzaList