package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza, Integer> {
}
