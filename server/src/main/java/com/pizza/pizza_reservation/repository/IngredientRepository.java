package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {

    @Query("SELECT i FROM Ingredient i order by i.name")
    List<Ingredient> findAllSorted();

    @Query("SELECT i FROM Ingredient i WHERE i.active = ?1")
    public List<Ingredient> getAllActiveIngredients(boolean active);

    @Modifying
    @Query("UPDATE Ingredient i SET i.active = ?1 WHERE i.id = ?2")
    public void updateActiveStatus(boolean active, Integer id);

    @Query("SELECT count (i) FROM Ingredient i where i.name = ?1")
    Integer searchDuplicityName(String name);

}
