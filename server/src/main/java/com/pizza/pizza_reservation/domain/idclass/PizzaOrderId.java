package com.pizza.pizza_reservation.domain.idclass;

import com.pizza.pizza_reservation.domain.PizzaIngredient;

import java.io.Serializable;
import java.util.Objects;

public class PizzaOrderId implements Serializable {

    private Integer orderId;
    private Integer pizzaId;

    public PizzaOrderId() {
    }

    public PizzaOrderId(Integer orderId, Integer pizzaId) {
        this.orderId = orderId;
        this.pizzaId = pizzaId;
    }

    @Override
    public boolean equals(Object o) {
        if ( this == o ) {
            return true;
        }
        if ( o == null || getClass() != o.getClass() ) {
            return false;
        }
        PizzaOrderId pk = (PizzaOrderId) o;
        return Objects.equals( pizzaId, pk.pizzaId ) &&
                Objects.equals( orderId, pk.orderId );
    }

    @Override
    public int hashCode() {
        return Objects.hash( pizzaId, orderId );
    }
}
