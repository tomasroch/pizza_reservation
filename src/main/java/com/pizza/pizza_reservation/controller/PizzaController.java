package com.pizza.pizza_reservation.controller;

import com.pizza.pizza_reservation.domain.Pizza;
import com.pizza.pizza_reservation.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/pizza")
public class PizzaController {

    @Autowired
    private PizzaService pizzaService;

    @PostMapping(value = "/create")
    public @ResponseBody Pizza createPizza(@RequestBody Pizza newPizza) {        return pizzaService.createNewPizza(newPizza);    }

    @GetMapping (value = "/list")
    public ResponseEntity<List<Pizza>> getAllPizzas() {       return  ResponseEntity.ok(pizzaService.getAllPizzas());    }

    @GetMapping (value = "/list/{name}")
    public ResponseEntity<List<Pizza>> getAllPizzas(@PathVariable String name) {       return  ResponseEntity.ok(pizzaService.getPizzasByName(name));    }

}