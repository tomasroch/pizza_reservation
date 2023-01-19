package com.pizza.pizza_reservation.enums;

import java.io.Serializable;

public enum ORDER_STATUS implements Serializable {
    NEW,
    PROCESSING,
    SENT,
    DELIVERED,
    CANCELLED
}
