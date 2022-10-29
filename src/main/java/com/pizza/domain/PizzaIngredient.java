package com.pizza.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PizzaIngredient {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private String pizzaId;
  private String ingredientId;


  public String getPizzaId() {
    return pizzaId;
  }

  public void setPizzaId(String pizzaId) {
    this.pizzaId = pizzaId;
  }


  public String getIngredientId() {
    return ingredientId;
  }

  public void setIngredientId(String ingredientId) {
    this.ingredientId = ingredientId;
  }

}
