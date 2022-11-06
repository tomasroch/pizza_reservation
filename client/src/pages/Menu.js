import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import PizzaCard from "../components/PizzaCard";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { CartContext } from "../CartContext";

function Menu() {
    const [pizzaList, setPizzaList] = useState([])
    const { addItemToCart, cartItems } = useContext(CartContext)

    const loadPizzaList = () => {
        axios
            .get('http://localhost:8080/api/pizza/list', {})
            .then(
                (response) => {
                    setPizzaList(response.data)
                },
                (error) => console.log(error))
    }

    useEffect(() => {
        loadPizzaList();
    }, [])

    const addPizzaToCart = (id, count) => {
        addItemToCart({
            pizzaId: id,
            amount: count
        })
    }

    return (
        <Layout title='Pizza'>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {pizzaList.map((pizza, i) => (
                    <Grid key={i} item>
                        <PizzaCard  {...pizza} addPizza={addPizzaToCart} />
                    </Grid>
                ))}
            </Grid>
        </Layout >
    );
}

export default Menu;