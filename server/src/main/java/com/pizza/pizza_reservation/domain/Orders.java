package com.pizza.pizza_reservation.domain;

import com.pizza.pizza_reservation.enums.ORDER_STATUS;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Entity
public class Orders {

  @Id
  @GeneratedValue(generator = "orderSeq")
  @SequenceGenerator(name = "orderSeq", sequenceName = "ORDER_SEQ", allocationSize = 1)
  private Integer id;
  private BigDecimal price;

  @Enumerated(EnumType.STRING)
  private ORDER_STATUS status;
  @Column(updatable = false)
  private Date created;
  private Date updated;
  private Integer customerId;
  private Date estimatedDelivery;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name="address_id", nullable=false)
  private Address address;


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


  public Date getCreated() {
    return created;
  }

  public void setCreated(Date created) {
    this.created = created;
  }


  public Date getUpdated() {
    return updated;
  }

  public void setUpdated(Date updated) {
    this.updated = updated;
  }


  public Integer getCustomerId() {
    return customerId;
  }

  public void setCustomerId(Integer customerId) {
    this.customerId = customerId;
  }


  public Date getEstimatedDelivery() {
    return estimatedDelivery;
  }

  public void setEstimatedDelivery(Date estimatedDelivery) {
    this.estimatedDelivery = estimatedDelivery;
  }

  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }
}
