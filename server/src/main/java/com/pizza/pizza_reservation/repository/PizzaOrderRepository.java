package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.PizzaOrder;
import com.pizza.pizza_reservation.domain.idclass.PizzaOrderId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PizzaOrderRepository extends JpaRepository<PizzaOrder, PizzaOrderId> {

    @Modifying
    @Query("SELECT po from PizzaOrder po where po.orderId = ?1")
    List<PizzaOrder> readOrderItems(Integer id);
}
