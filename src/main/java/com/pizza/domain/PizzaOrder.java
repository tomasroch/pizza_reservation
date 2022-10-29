package com.pizza.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PizzaOrder {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private String orderId;
  private String pizzaId;
  private String amount;


  public String getOrderId() {
    return orderId;
  }

  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }


  public String getPizzaId() {
    return pizzaId;
  }

  public void setPizzaId(String pizzaId) {
    this.pizzaId = pizzaId;
  }


  public String getAmount() {
    return amount;
  }

  public void setAmount(String amount) {
    this.amount = amount;
  }

}
