package com.pizza.pizza_reservation.controller;

import com.pizza.pizza_reservation.domain.Pizza;
import com.pizza.pizza_reservation.domain.PizzaIngredient;
import com.pizza.pizza_reservation.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/pizza")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PizzaController {

    @Autowired
    private PizzaService pizzaService;

    @PostMapping(value = "/create")
    public @ResponseBody Pizza createPizza(@RequestBody Pizza newPizza) {        return pizzaService.createNewPizza(newPizza);    }

    @GetMapping (value = "/list")
    public ResponseEntity<List<Pizza>> getAllPizzas() {       return  ResponseEntity.ok(pizzaService.getAllPizzas());    }

    @GetMapping (value = "/list/active/{active}")
    public ResponseEntity<List<Pizza>> getAllActivePizzas(@PathVariable boolean active) {       return  ResponseEntity.ok(pizzaService.getAllActivePizzas(active));    }

    @GetMapping (value = "/{id}")
    public ResponseEntity<Pizza> getPizzaById(@PathVariable Integer id) {
        Pizza pizza = pizzaService.getPizzaById(id);
        if (pizza != null)
            return  ResponseEntity.ok(pizza);
        return ResponseEntity.notFound().build();
    }

    @GetMapping (value = "/list/{name}")
    public ResponseEntity<List<Pizza>> getAllPizzas(@PathVariable String name) {       return  ResponseEntity.ok(pizzaService.getPizzasByName(name));}

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<String> deletePizza(@PathVariable Integer id){
        try {
            pizzaService.deletePizza(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(value = "/update")
    public ResponseEntity<String> updatePizza(@RequestBody Pizza pizza){
        try {
            pizzaService.updatePizza(pizza);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(value = "/{id}/active/{active}")
    public ResponseEntity<String> updateActiveStatus(@PathVariable Integer id, @PathVariable boolean active){
        try {
            pizzaService.updateActiveStatus(id, active);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "/ingredient")
    public @ResponseBody PizzaIngredient addPizzaIngredient(@RequestBody PizzaIngredient pizzaIngredient) {        return pizzaService.addPizzaIngredient(pizzaIngredient);    }

    @DeleteMapping(value = "/ingredient")
    public ResponseEntity<String> deletePizzaIngredient(@RequestBody PizzaIngredient pizzaIngredient) {
        try {
            pizzaService.deletePizzaIngredient(pizzaIngredient);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
