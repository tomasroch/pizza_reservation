package com.pizza.pizza_reservation.domain;

import com.pizza.pizza_reservation.enums.ORDER_STATUS;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Order {

  @Id
  @GeneratedValue(generator = "orderSeq")
  @SequenceGenerator(name = "orderSeq", sequenceName = "ORDER_SEQ", allocationSize = 1)
  private Integer id;
  private BigDecimal price;

  @Enumerated(EnumType.STRING)
  private ORDER_STATUS status;
  private java.sql.Date created;
  private java.sql.Date updated;
  private String customerId;
  private java.sql.Date estimatedDelivery;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }


  public ORDER_STATUS getStatus() {
    return status;
  }

  public void setStatus(ORDER_STATUS status) {
    this.status = status;
  }


  public java.sql.Date getCreated() {
    return created;
  }

  public void setCreated(java.sql.Date created) {
    this.created = created;
  }


  public java.sql.Date getUpdated() {
    return updated;
  }

  public void setUpdated(java.sql.Date updated) {
    this.updated = updated;
  }


  public String getCustomerId() {
    return customerId;
  }

  public void setCustomerId(String customerId) {
    this.customerId = customerId;
  }


  public java.sql.Date getEstimatedDelivery() {
    return estimatedDelivery;
  }

  public void setEstimatedDelivery(java.sql.Date estimatedDelivery) {
    this.estimatedDelivery = estimatedDelivery;
  }

}
