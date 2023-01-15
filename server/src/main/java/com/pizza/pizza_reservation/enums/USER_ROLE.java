package com.pizza.pizza_reservation.enums;

import org.springframework.security.core.GrantedAuthority;

public enum USER_ROLE implements GrantedAuthority {

    ADMIN,
    REGISTERED_CUSTOMER,
    EMPLOYEE;

    @Override
    public String getAuthority() {
        // Prý tam musí být prefix kvůli springu, but not sure about this
        return "ROLE_" + this.name();
    }
}
