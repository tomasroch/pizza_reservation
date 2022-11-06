package com.pizza.pizza_reservation.domain.idclass;

import java.io.Serializable;

public class PizzaOrderId implements Serializable {

    private Integer orderId;
    private Integer pizzaId;

    public PizzaOrderId() {
    }

    public PizzaOrderId(Integer orderId, Integer pizzaId) {
        this.orderId = orderId;
        this.pizzaId = pizzaId;
    }
}
