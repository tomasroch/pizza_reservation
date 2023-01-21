package com.pizza.pizza_reservation.controller;

import com.pizza.pizza_reservation.domain.Address;
import com.pizza.pizza_reservation.domain.Orders;
import com.pizza.pizza_reservation.dto.OrderDto;
import com.pizza.pizza_reservation.enums.ORDER_STATUS;
import com.pizza.pizza_reservation.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private static Logger logger = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    private OrderService orderService;

    @PostMapping(value = "/create")
    public ResponseEntity<Orders> createOrder(@RequestBody OrderDto newOrder) {        return ResponseEntity.ok(orderService.createNewOrder(newOrder));    }

    @GetMapping(value = "/list")
    public ResponseEntity<List<Orders>> getAllOrders() {       return  ResponseEntity.ok(orderService.getAllOrders());    }

    @GetMapping (value = "/list/status/{status}")
    public ResponseEntity<List<Orders>> getAllOrdersByStatus(@PathVariable ORDER_STATUS status) {       return  ResponseEntity.ok(orderService.getAllOrdersByStatus(status));}

    @GetMapping (value = "/list/customerId/{customerId}")
    public ResponseEntity<List<Orders>> getAllOrdersByCustomerId(@PathVariable Integer customerId) {       return  ResponseEntity.ok(orderService.getAllOrdersByCustomerId(customerId));}

    @GetMapping (value = "/addresses/list/customerId/{customerId}")
    public ResponseEntity<List<Address>> getAllAddressesByCustomerId(@PathVariable Integer customerId) {       return  ResponseEntity.ok(orderService.getAllAddressesByCustomerId(customerId));}


    @GetMapping (value = "/{id}")
    public ResponseEntity<Orders> getOrderById(@PathVariable Integer id) {
        Orders pizza = orderService.getOrderById(id);
        if (pizza != null)
            return  ResponseEntity.ok(pizza);
        return ResponseEntity.notFound().build();
    }

    @PutMapping(value = "/update")
    public ResponseEntity<String> updateOrder(@RequestBody Orders orders){
        try {
            orderService.updateOrder(orders);
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
            logger.warn(e.getMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
