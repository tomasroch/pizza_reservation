package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.PizzaOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaOrderRepository extends JpaRepository<PizzaOrder, Integer> {
}
