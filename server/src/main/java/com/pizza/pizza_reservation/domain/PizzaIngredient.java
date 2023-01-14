package com.pizza.pizza_reservation.domain;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@IdClass(PizzaIngredient.PizzaIngredientPK.class)
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

  public class PizzaIngredientPK implements Serializable {

    private Integer pizzaId;
    private Integer ingredientId;

    public PizzaIngredientPK(Integer pizzaId, Integer ingredientId) {
      this.pizzaId = pizzaId;
      this.ingredientId = ingredientId;
    }
    public PizzaIngredientPK() {
    }

    //Getters and setters are omitted for brevity

    @Override
    public boolean equals(Object o) {
      if ( this == o ) {
        return true;
      }
      if ( o == null || getClass() != o.getClass() ) {
        return false;
      }
      PizzaIngredientPK pk = (PizzaIngredientPK) o;
      return Objects.equals( pizzaId, pk.pizzaId ) &&
              Objects.equals( ingredientId, pk.ingredientId );
    }

    @Override
    public int hashCode() {
      return Objects.hash( pizzaId, ingredientId );
    }
  }

}
