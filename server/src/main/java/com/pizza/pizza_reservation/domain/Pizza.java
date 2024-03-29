package com.pizza.pizza_reservation.domain;


import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Pizza implements Serializable {

  @Id
  @GeneratedValue(generator = "pizzaSeq")
  @SequenceGenerator(name = "pizzaSeq", sequenceName = "PIZZA_SEQ", allocationSize = 1)
  private Integer id;
  private String name;
  private BigDecimal price;
  @Column(updatable = false)
  private Date created;
  private Date updated;
  private String description;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
          name = "pizza_ingredient",
          joinColumns = {@JoinColumn(name = "pizzaId")},
          inverseJoinColumns = {@JoinColumn(name = "ingredientId")}
  )
  private List<Ingredient> ingredients = new ArrayList<>();

  @Transient
  private Integer amount;

  @Column(nullable = false)
  private boolean active;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public Date getCreated() {
    return created;
  }

  public void setCreated(Date created) {
    this.created = created;
  }

  public Date getUpdated() {
    return updated;
  }

  public void setUpdated(Date updated) {
    this.updated = updated;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean getActive() {    return active;  }

  public void setActive(boolean active) {    this.active = active;  }

  public List<Ingredient> getIngredients() {    return ingredients;  }

  public void setIngredients(List<Ingredient> ingredients) {    this.ingredients = ingredients;  }

  public Integer getAmount() {
    return amount;
  }

  public void setAmount(Integer amount) {
    this.amount = amount;
  }
}
