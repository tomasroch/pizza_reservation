package com.pizza.pizza_reservation.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
public class Customer implements Serializable {

  @Id
  @GeneratedValue(generator = "customerSeq")
  @SequenceGenerator(name = "customerSeq", sequenceName = "CUSTOMER_SEQ", allocationSize = 1)
  private Integer id;
  private String firstName;
  private String lastName;
  private String email;
  private String phone;
  private Integer userId;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }


  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }


  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }


  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }


  public Integer getUserId() {
    return userId;
  }

  public void setUserId(Integer userId) {
    this.userId = userId;
  }

}
