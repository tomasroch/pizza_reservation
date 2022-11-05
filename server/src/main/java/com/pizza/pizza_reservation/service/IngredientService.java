package com.pizza.pizza_reservation.service;

import com.pizza.pizza_reservation.domain.Ingredient;
import com.pizza.pizza_reservation.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {
    
    @Autowired
    IngredientRepository ingredientRepository;

    public Ingredient createNewIngredient(Ingredient newIngredient) {        return ingredientRepository.save(newIngredient);    }

    public List<Ingredient> getAllIngredients(){ return ingredientRepository.findAll();}

    public List<Ingredient> getAllActiveIngredients(boolean active){ return ingredientRepository.getAllActiveIngredients(active);}

    public Ingredient getIngredientById(Integer id){ return ingredientRepository.findById(id).orElse(null);}

    public void updateActiveStatus(Integer idIngredient, boolean active){        ingredientRepository.updateActiveStatus(active, idIngredient);    }
}
