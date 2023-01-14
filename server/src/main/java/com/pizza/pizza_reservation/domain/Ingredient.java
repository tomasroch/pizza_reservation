package com.pizza.pizza_reservation.domain;

import jakarta.persistence.*;

@Entity
public class Ingredient {

  @Id
  @GeneratedValue(generator = "ingredientSeq")
  @SequenceGenerator(name = "ingredientSeq", sequenceName = "INGREDIENT_SEQ", allocationSize = 1)
  private Integer id;
  private String name;

  @Column(nullable = false)
  private boolean active;

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

  public boolean getActive() {    return active;  }

  public void setActive(boolean active) {    this.active = active;  }

}
