package com.pizza.pizza_reservation.domain;

import com.pizza.pizza_reservation.enums.USER_ROLE;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
public class Userz implements UserDetails {

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


  @Override
  public String getUsername() {
    return username;
  }

  @Override
  public boolean isAccountNonExpired() {    return true;  }

  @Override
  public boolean isAccountNonLocked() {    return true;  }

  @Override
  public boolean isCredentialsNonExpired() {    return true;  }

  @Override
  public boolean isEnabled() {    return true;  }

  @Override
  public String getPassword() {
    return password;
  }

  @Override // role has to extend grantedAuthority...
  public Collection<? extends GrantedAuthority> getAuthorities() {    return List.of(role);  }

  public void setUsername(String username) {
    this.username = username;
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
