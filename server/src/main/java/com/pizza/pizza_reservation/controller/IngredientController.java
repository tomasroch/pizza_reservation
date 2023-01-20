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
    public ResponseEntity<Ingredient> createIngredient(@RequestBody Ingredient newIngredient) {
        try {
            return ResponseEntity.ok(ingredientService.createNewIngredient(newIngredient));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value = "/list")
    public ResponseEntity<List<Ingredient>> getAllIngredients() {       return  ResponseEntity.ok(ingredientService.getAllIngredients());    }

    @GetMapping (value = "/list/active/{active}")
    public ResponseEntity<List<Ingredient>> getAllActiveIngredient(@PathVariable boolean active) {       return  ResponseEntity.ok(ingredientService.getAllActiveIngredients(active));    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Ingredient> updateIngredient(@PathVariable Integer id, @RequestBody Ingredient newIngredient){
        try {
            return ResponseEntity.ok(ingredientService.updateIngredient(id, newIngredient));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deleteIngredient(@PathVariable Integer id) {
        try {
            ingredientService.deleteIngredient(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
