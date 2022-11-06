package com.pizza.pizza_reservation.service;

import com.pizza.pizza_reservation.domain.*;
import com.pizza.pizza_reservation.dto.OrderDto;
import com.pizza.pizza_reservation.enums.ORDER_STATUS;
import com.pizza.pizza_reservation.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private PizzaRepository pizzaRepository;

    @Autowired
    private PizzaOrderRepository pizzaOrderRepository;

    @Transactional
    public Order createNewOrder(OrderDto newOrder) {
        Order order = new Order();
        order.setStatus(ORDER_STATUS.NEW);
        order.setEstimatedDelivery(Date.from(Instant.now().plusSeconds(3600)));

        if (newOrder.getCustomerId() != null){
            order.setCustomerId(newOrder.getCustomerId());
        } else {
            Customer customer = new Customer();
            customer.setFirstName(newOrder.getFirstName());
            customer.setLastName(newOrder.getLastName());
            customer.setEmail(newOrder.getEmail());
            customer.setPhone(newOrder.getPhone());
            customer = customerRepository.save(customer);

            order.setCustomerId(customer.getId());
        }
        if (newOrder.getIdAddress() != null){
            Address address = addressRepository.getReferenceById(newOrder.getIdAddress());
            order.setAddress(address);
        } else {
            Address address = new Address();
            address.setCity(newOrder.getCity());
            address.setStreet(newOrder.getStreet());
            address.setPostalCode(newOrder.getPostalCode());
            address = addressRepository.save(address);
            order.setAddress(address);
        }
        order = orderRepository.save(order);
        Integer orderId = order.getId();
        BigDecimal price = BigDecimal.ZERO;
        for(Map.Entry<Integer, Integer> entry : newOrder.getPizzaAmmount().entrySet()){
            Pizza pizza = pizzaRepository.getReferenceById(entry.getKey());
            BigDecimal itemQantity = BigDecimal.valueOf(entry.getValue());
            price = price.add(pizza.getPrice().multiply(itemQantity));
            PizzaOrder pizzaOrder = new PizzaOrder();
            pizzaOrder.setPizzaId(entry.getKey());
            pizzaOrder.setOrderId(orderId);
            pizzaOrder.setAmount(entry.getValue());
            pizzaOrderRepository.save(pizzaOrder);
        }
        order.setPrice(price);
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders(){ return orderRepository.findAll();}

    public Order getOrderById(Integer id){ return orderRepository.getReferenceById(id);}

    public List<Order> getAllOrdersByStatus(ORDER_STATUS status){ return orderRepository.getAllOrdersByStatus(status);}

    public List<Order> getAllOrdersByCustomerId(Integer customerId){ return orderRepository.getAllOrdersByCustomerId(customerId);}

    public void updateOrder(Order order){ orderRepository.save(order);}

    public void updateOrderStatus(Integer orderId, ORDER_STATUS status){ orderRepository.updateActiveStatus(status, orderId, new Date());}
}
