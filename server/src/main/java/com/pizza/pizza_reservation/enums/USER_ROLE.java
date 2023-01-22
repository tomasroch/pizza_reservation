package com.pizza.pizza_reservation.enums;

import org.springframework.security.core.GrantedAuthority;

public enum USER_ROLE implements GrantedAuthority {

    ADMIN,
    REGISTERED_CUSTOMER,
    EMPLOYEE;

    @Override
    public String getAuthority() {
        return this.name();
    }
}
