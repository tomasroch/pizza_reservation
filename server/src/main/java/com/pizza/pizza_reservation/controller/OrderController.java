package com.pizza.pizza_reservation.controller;

import com.pizza.pizza_reservation.domain.Order;
import com.pizza.pizza_reservation.dto.OrderDto;
import com.pizza.pizza_reservation.enums.ORDER_STATUS;
import com.pizza.pizza_reservation.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/order")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping(value = "/create")
    public @ResponseBody Order createOrder(@RequestBody OrderDto newOrder) {        return orderService.createNewOrder(newOrder);    }

    @GetMapping(value = "/list")
    public ResponseEntity<List<Order>> getAllOrders() {       return  ResponseEntity.ok(orderService.getAllOrders());    }

    @GetMapping (value = "/list/status/{status}")
    public ResponseEntity<List<Order>> getAllOrdersByStatus(@PathVariable ORDER_STATUS status) {       return  ResponseEntity.ok(orderService.getAllOrdersByStatus(status));}

    @GetMapping (value = "/list/customerId/{customerId}")
    public ResponseEntity<List<Order>> getAllOrdersByCustomerId(@PathVariable Integer customerId) {       return  ResponseEntity.ok(orderService.getAllOrdersByCustomerId(customerId));}


    @GetMapping (value = "/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Integer id) {
        Order pizza = orderService.getOrderById(id);
        if (pizza != null)
            return  ResponseEntity.ok(pizza);
        return ResponseEntity.notFound().build();
    }

    @PutMapping(value = "/update")
    public ResponseEntity<String> updateOrder(@RequestBody Order order){
        try {
            orderService.updateOrder(order);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(value = "/{id}/status/{status}")
    public ResponseEntity<String> updateOrder(@PathVariable Integer id, @PathVariable ORDER_STATUS status){
        try {
            orderService.updateOrderStatus(id, status);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
