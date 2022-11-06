package com.pizza.pizza_reservation.controller;

import com.pizza.pizza_reservation.domain.Ingredient;
import com.pizza.pizza_reservation.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/ingredient")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class IngredientController {

    @Autowired
    private IngredientService ingredientService;

    @PostMapping(value = "/create")
    public @ResponseBody Ingredient createIngredient(@RequestBody Ingredient newIngredient) {        return ingredientService.createNewIngredient(newIngredient);    }

    @GetMapping(value = "/list")
    public ResponseEntity<List<Ingredient>> getAllIngredients() {       return  ResponseEntity.ok(ingredientService.getAllIngredients());    }

    @GetMapping (value = "/list/active/{active}")
    public ResponseEntity<List<Ingredient>> getAllActiveIngredient(@PathVariable boolean active) {       return  ResponseEntity.ok(ingredientService.getAllActiveIngredients(active));    }

    @PutMapping(value = "/{id}/active/{active}")
    public ResponseEntity<String> updateIngredient(@PathVariable Integer idIngredient, @PathVariable boolean active){
        try {
            ingredientService.updateActiveStatus(idIngredient, active);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
