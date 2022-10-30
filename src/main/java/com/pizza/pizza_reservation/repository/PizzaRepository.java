package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza, Integer> {

    @Query("SELECT p FROM Pizza p WHERE p.name = ?1")
    public List<Pizza> findByName(String name);

}
