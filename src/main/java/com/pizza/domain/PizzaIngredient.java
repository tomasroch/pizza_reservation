package com.pizza.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PizzaIngredient {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer pizzaId;
  private String ingredientId;


  public Integer getPizzaId() {
    return pizzaId;
  }

  public void setPizzaId(Integer pizzaId) {
    this.pizzaId = pizzaId;
  }


  public String getIngredientId() {
    return ingredientId;
  }

  public void setIngredientId(String ingredientId) {
    this.ingredientId = ingredientId;
  }

}
