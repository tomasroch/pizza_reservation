package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza, Integer> {

    @Query("SELECT p FROM Pizza p WHERE p.name = ?1")
    public List<Pizza> findByName(String name);

    @Query("SELECT p FROM Pizza p WHERE p.active = ?1")
    public List<Pizza> getAllActivePizzas(boolean active);

    @Modifying
    @Query("UPDATE Pizza p SET p.active = ?1 WHERE p.id = ?2")
    public List<Pizza> updateActiveStatus(boolean active, Integer id);

}
