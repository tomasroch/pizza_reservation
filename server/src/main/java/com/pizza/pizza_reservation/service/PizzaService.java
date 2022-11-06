package com.pizza.pizza_reservation.service;

import com.pizza.pizza_reservation.domain.Pizza;
import com.pizza.pizza_reservation.domain.PizzaIngredient;
import com.pizza.pizza_reservation.repository.PizzaIngredientRepository;
import com.pizza.pizza_reservation.repository.PizzaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@Service
public class PizzaService {

    private static Logger logger = LoggerFactory.getLogger(PizzaService.class);

    @Autowired
    private PizzaRepository pizzaRepository;

    @Autowired
    private PizzaIngredientRepository pizzaIngredientRepository;

    public Pizza createNewPizza(Pizza newPizza) {        return pizzaRepository.save(newPizza);    }

    public List<Pizza> getAllPizzas(){ return pizzaRepository.findAll();}
    public List<Pizza> getAllActivePizzas(boolean active){ return pizzaRepository.getAllActivePizzas(active);}

    public List<Pizza> getPizzasByName(String name){ return pizzaRepository.findByName(name);}

    public Pizza getPizzaById(Integer id){ return pizzaRepository.findById(id).orElse(null);}

    public void deletePizza(Integer id){  pizzaRepository.deleteById(id);}

    public void updatePizza(Pizza pizza){
        pizza.setUpdated(Date.from(Instant.now()));
        pizzaRepository.save(pizza);
    }

    public void updateActiveStatus(Integer idPizza, boolean active){        pizzaRepository.updateActiveStatus(active, idPizza);    }

    public PizzaIngredient addPizzaIngredient(PizzaIngredient pizzaIngredient){ return pizzaIngredientRepository.save(pizzaIngredient);}

    public void deletePizzaIngredient(PizzaIngredient pizzaIngredient){     pizzaIngredientRepository.delete(pizzaIngredient);}
}
