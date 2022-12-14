package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.Orders;
import com.pizza.pizza_reservation.enums.ORDER_STATUS;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {

    @Query("SELECT o FROM Orders o WHERE o.status = ?1")
    public List<Orders> getAllOrdersByStatus(ORDER_STATUS status);

    @Query("SELECT o FROM Orders o WHERE o.customerId = ?1")
    public List<Orders> getAllOrdersByCustomerId(Integer customerId);

    @Modifying
    @Query("UPDATE Orders o SET o.status = ?1, o.updated = ?3 WHERE o.id = ?2")
    public void updateActiveStatus(ORDER_STATUS status, Integer id, Date updated);
}
