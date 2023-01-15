package com.pizza.pizza_reservation.security;

public class AuthCredentialsRequestDto {

    private String username;
    private String password;

    public String getUsername() {        return username;    }

    public void setUsername(String username) {        this.username = username;    }

    public String getPassword() {        return password;    }

    public void setPassword(String password) {        this.password = password;    }
}
