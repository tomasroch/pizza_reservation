import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import PizzaCard from "../components/pizza/PizzaCard";
import Layout from "../components/layout/Layout";
import { AppContext } from "../context/AppContext";
import PizzaDataService from "../services/PizzaService";

function Menu() {
    const [pizzaList, setPizzaList] = useState([])
    const { addItemToCart, showSnackbar } = useContext(AppContext)

    const loadActivePizzas = () => {
        PizzaDataService.getAll()
            .then((result) => {
                setPizzaList(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        loadActivePizzas();
    }, [])

    const addPizzaToCart = (pizza) => {
        addItemToCart(pizza)
        showSnackbar('Item successfully added!', 'success')
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