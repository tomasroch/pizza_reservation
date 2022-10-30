package com.pizza.pizza_reservation.service;

import com.pizza.pizza_reservation.domain.Pizza;
import com.pizza.pizza_reservation.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Service
public class PizzaService {

    @Autowired
    private PizzaRepository pizzaRepository;

    public void createNewPizza() {
        Pizza pizza = new Pizza();
        pizza.setCreated(new Date());
        pizza.setName("Test");
        pizza.setPrice(new BigDecimal(12));

        pizzaRepository.save(pizza);
    }

    public List<Pizza> getAllPizzas(){ return pizzaRepository.findAll();}
}
