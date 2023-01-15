package com.pizza.pizza_reservation.domain;

import com.pizza.pizza_reservation.domain.idclass.PizzaOrderId;

import javax.persistence.*;

@Entity
@IdClass(PizzaOrderId.class)
public class PizzaOrder {

  @Id
  private Integer orderId;
  private Integer pizzaId;
  private Integer amount;

  public Integer getOrderId() {
    return orderId;
  }

  public void setOrderId(Integer orderId) {
    this.orderId = orderId;
  }


  public Integer getPizzaId() {
    return pizzaId;
  }

  public void setPizzaId(Integer pizzaId) {
    this.pizzaId = pizzaId;
  }


  public Integer getAmount() {
    return amount;
  }

  public void setAmount(Integer amount) {
    this.amount = amount;
  }

}
