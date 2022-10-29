package com.pizza.pizza_reservation.controller;

import com.pizza.pizza_reservation.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api")
public class PizzaController {

    @Autowired
    private PizzaService pizzaService;

    @GetMapping(value = "create-pizza")
    public void createPizza() {
        pizzaService.createNewPizza();
    }

}
