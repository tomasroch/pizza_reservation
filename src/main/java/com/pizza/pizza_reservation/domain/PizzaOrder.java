package com.pizza.pizza_reservation.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PizzaOrder {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer orderId;
  private String pizzaId;
  private Integer amount;

  public Integer getOrderId() {
    return orderId;
  }

  public void setOrderId(Integer orderId) {
    this.orderId = orderId;
  }


  public String getPizzaId() {
    return pizzaId;
  }

  public void setPizzaId(String pizzaId) {
    this.pizzaId = pizzaId;
  }


  public Integer getAmount() {
    return amount;
  }

  public void setAmount(Integer amount) {
    this.amount = amount;
  }

}
