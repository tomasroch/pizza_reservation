package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.Order;
import com.pizza.pizza_reservation.enums.ORDER_STATUS;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

    @Query("SELECT o FROM Order o WHERE o.status = ?1")
    public List<Order> getAllOrdersByStatus(ORDER_STATUS status);

    @Query("SELECT o FROM Order o WHERE o.customerId = ?1")
    public List<Order> getAllOrdersByCustomerId(Integer customerId);
}
