package com.pizza.pizza_reservation.controller;

import com.pizza.pizza_reservation.domain.Pizza;
import com.pizza.pizza_reservation.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/pizza")
public class PizzaController {

    @Autowired
    private PizzaService pizzaService;

    //TODO
    @GetMapping (value = "/create")
    public void createPizza() {        pizzaService.createNewPizza();    }

    @GetMapping (value = "/list")
    public ResponseEntity<List<Pizza>> getAllPizzas() {       return  ResponseEntity.ok(pizzaService.getAllPizzas());    }

}
