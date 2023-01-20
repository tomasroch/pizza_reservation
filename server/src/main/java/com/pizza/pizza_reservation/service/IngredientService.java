package com.pizza.pizza_reservation.service;

import com.pizza.pizza_reservation.domain.Ingredient;
import com.pizza.pizza_reservation.repository.IngredientRepository;
import com.pizza.pizza_reservation.repository.PizzaIngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class IngredientService {
    
    @Autowired
    IngredientRepository ingredientRepository;

    @Autowired
    private PizzaIngredientRepository pizzaIngredientRepository;

    public Ingredient createNewIngredient(Ingredient newIngredient) throws Exception{
        if (newIngredient.getName() == null || newIngredient.getName().isBlank()) {
            throw new Exception("Invalid ingredient name");
        }

        if (ingredientRepository.searchDuplicityName(newIngredient.getName()) > 1) {
            throw new Exception("Duplicity ingredient name");
        }

        return ingredientRepository.save(newIngredient);
    }

    public List<Ingredient> getAllIngredients(){ return ingredientRepository.findAllSorted();}

    public List<Ingredient> getAllActiveIngredients(boolean active){ return ingredientRepository.getAllActiveIngredients(active);}

    public Ingredient getIngredientById(Integer id){ return ingredientRepository.findById(id).orElse(null);}

    public Ingredient updateIngredient(Integer id, Ingredient newIngredient) throws Exception {
        Ingredient oldIngredient = ingredientRepository.getById(id);

        if (ingredientRepository.searchDuplicityName(newIngredient.getName()) > 1) {
            throw new Exception("Duplicity ingredient name");
        }
        oldIngredient.setActive(newIngredient.getActive());
        oldIngredient.setName(newIngredient.getName());

        return ingredientRepository.save(oldIngredient);
    }

    @Transactional(rollbackOn = Exception.class)
    public void deleteIngredient(Integer id) {
        pizzaIngredientRepository.deleteByIngredient(id);
        ingredientRepository.deleteById(id);
    }
}
