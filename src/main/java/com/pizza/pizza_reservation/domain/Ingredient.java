package com.pizza.pizza_reservation.domain;

import javax.persistence.*;

@Entity
public class Ingredient {

  @Id
  @GeneratedValue(generator = "ingredientSeq")
  @SequenceGenerator(name = "ingredientSeq", sequenceName = "INGREDIENT_SEQ", allocationSize = 1)
  private Integer id;
  private String name;

  public Integer getId() {    return id;  }

  public void setId(Integer id) {
    this.id = id;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

}
