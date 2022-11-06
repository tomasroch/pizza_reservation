package com.pizza.pizza_reservation.dto;

import java.util.Map;

public class OrderDto {

    private Integer customerId;

    private String firstName;

    private String lastName;

    private String email;

    private String phone;

    Map<Integer, Integer> pizzaAmount;

    private Integer idAddress;

    private String postalCode;

    private String city;

    private String street;

    public OrderDto() {    }

    public Integer getCustomerId() {        return customerId;    }

    public void setCustomerId(Integer customerId) {        this.customerId = customerId;    }

    public Integer getIdAddress() {        return idAddress;    }

    public void setIdAddress(Integer idAddress) {        this.idAddress = idAddress;    }

    public String getPostalCode() {        return postalCode;    }

    public void setPostalCode(String postalCode) {        this.postalCode = postalCode;    }

    public String getCity() {        return city;    }

    public void setCity(String city) {        this.city = city;    }

    public String getStreet() {        return street;    }

    public void setStreet(String street) {        this.street = street;    }

    public String getFirstName() {        return firstName;    }

    public void setFirstName(String firstName) {        this.firstName = firstName;    }

    public String getLastName() {        return lastName;    }

    public void setLastName(String lastName) {        this.lastName = lastName;    }

    public String getEmail() {        return email;    }

    public void setEmail(String email) {        this.email = email;    }

    public String getPhone() {        return phone;    }

    public void setPhone(String phone) {        this.phone = phone;    }

    public Map<Integer, Integer> getPizzaAmount() {        return pizzaAmount;    }

    public void setPizzaAmount(Map<Integer, Integer> pizzaAmount) {        this.pizzaAmount = pizzaAmount;    }
}
