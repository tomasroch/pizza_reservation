package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.Ingredient;
import com.pizza.pizza_reservation.domain.PizzaIngredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PizzaIngredientRepository extends JpaRepository<PizzaIngredient, PizzaIngredient.PizzaIngredientPK> {

    @Modifying
    @Query("DELETE FROM PizzaIngredient pi  WHERE pi.ingredientId = ?1")
    void deleteByIngredient(Integer id);

}
