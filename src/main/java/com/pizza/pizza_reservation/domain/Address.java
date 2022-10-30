package com.pizza.pizza_reservation.domain;

import javax.persistence.*;

@Entity
public class Address {

  @Id
  @GeneratedValue(generator = "addressSeq")
  @SequenceGenerator(name = "addressSeq", sequenceName = "ADDRESS_SEQ", allocationSize = 1)
  private Integer id;
  private String postalCode;
  private String city;
  private String street;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public String getPostalCode() {
    return postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }


  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }


  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

}
