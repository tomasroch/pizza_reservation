package com.pizza.pizza_reservation.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class PizzaIngredient implements Serializable {

  @Id
  private Integer pizzaId;
  @Id
  private Integer ingredientId;

  public Integer getPizzaId() {
    return pizzaId;
  }

  public void setPizzaId(Integer pizzaId) {
    this.pizzaId = pizzaId;
  }


  public Integer getIngredientId() {
    return ingredientId;
  }

  public void setIngredientId(Integer ingredientId) {
    this.ingredientId = ingredientId;
  }

}
