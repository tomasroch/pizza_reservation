package com.pizza.pizza_reservation.service;

import com.pizza.pizza_reservation.domain.Order;
import com.pizza.pizza_reservation.enums.ORDER_STATUS;
import com.pizza.pizza_reservation.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order createNewOrder(Order newOrder) {        return orderRepository.save(newOrder);    }

    public List<Order> getAllOrders(){ return orderRepository.findAll();}

    public Order getOrderById(Integer id){ return orderRepository.getReferenceById(id);}

    public List<Order> getAllOrdersByStatus(ORDER_STATUS status){ return orderRepository.getAllOrdersByStatus(status);}

    public List<Order> getAllOrdersByCustomerId(Integer customerId){ return orderRepository.getAllOrdersByCustomerId(customerId);}
}
