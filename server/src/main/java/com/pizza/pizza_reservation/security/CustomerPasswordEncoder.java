package com.pizza.pizza_reservation.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CustomerPasswordEncoder {

    private PasswordEncoder passwordEncoder;

    public CustomerPasswordEncoder() {        this.passwordEncoder = new BCryptPasswordEncoder();    }

    public PasswordEncoder getPasswordEncoder() {        return passwordEncoder;    }

}
