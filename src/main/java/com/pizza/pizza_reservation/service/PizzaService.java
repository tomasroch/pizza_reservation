package com.pizza.pizza_reservation.service;

import com.pizza.pizza_reservation.domain.Pizza;
import com.pizza.pizza_reservation.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.Date;
import java.util.List;

@Service
public class PizzaService {

    @Autowired
    private PizzaRepository pizzaRepository;

    public Pizza createNewPizza(Pizza newPizza) {
        newPizza.setCreated(Date.from(Instant.now()));
        return pizzaRepository.save(newPizza);
    }

    public List<Pizza> getAllPizzas(){ return pizzaRepository.findAll();}

    public List<Pizza> getPizzasByName(String name){ return pizzaRepository.findByName(name);}
}
