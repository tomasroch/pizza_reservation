package com.pizza.pizza_reservation.domain;

import com.pizza.pizza_reservation.enums.USER_ROLE;

import jakarta.persistence.*;

@Entity
public class Userz {

  @Id
  @GeneratedValue(generator = "userSeq")
  @SequenceGenerator(name = "userSeq", sequenceName = "USER_SEQ", allocationSize = 1)
  private Integer id;
  private String username;
  private String password;

  @Enumerated(EnumType.STRING)
  private USER_ROLE role;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "customer_id", foreignKey = @ForeignKey(name = "customer_user_fk"))
  private Customer customer;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }


  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public USER_ROLE getRole() {
    return role;
  }

  public void setRole(USER_ROLE role) {
    this.role = role;
  }

  public Customer getCustomer() {
    return customer;
  }

  public void setCustomer(Customer customer) {
    this.customer = customer;
  }
}
