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
    public Orders createNewOrder(OrderDto newOrder) {
        Orders orders = new Orders();
        orders.setStatus(ORDER_STATUS.NEW);
        orders.setCreated(new Date());
        orders.setEstimatedDelivery(Date.from(Instant.now().plusSeconds(3600)));

        if (newOrder.getCustomerId() != null){
            orders.setCustomerId(newOrder.getCustomerId());
        } else {
            Customer customer = new Customer();
            customer.setFirstName(newOrder.getFirstName());
            customer.setLastName(newOrder.getLastName());
            customer.setEmail(newOrder.getEmail());
            customer.setPhone(newOrder.getPhone());
            customer = customerRepository.save(customer);

            orders.setCustomerId(customer.getId());
        }
        if (newOrder.getIdAddress() != null){
            Address address = addressRepository.getReferenceById(newOrder.getIdAddress());
            orders.setAddress(address);
        } else {
            Address address = new Address();
            address.setCity(newOrder.getCity());
            address.setStreet(newOrder.getStreet());
            address.setPostalCode(newOrder.getPostalCode());
            address = addressRepository.save(address);
            orders.setAddress(address);
        }
        orders = orderRepository.save(orders);
        Integer orderId = orders.getId();
        BigDecimal price = BigDecimal.ZERO;
        for(Map.Entry<Integer, Integer> entry : newOrder.getPizzaAmount().entrySet()){
            Pizza pizza = pizzaRepository.getReferenceById(entry.getKey());
            BigDecimal itemQantity = BigDecimal.valueOf(entry.getValue());
            price = price.add(pizza.getPrice().multiply(itemQantity));
            PizzaOrder pizzaOrder = new PizzaOrder();
            pizzaOrder.setPizzaId(entry.getKey());
            pizzaOrder.setOrderId(orderId);
            pizzaOrder.setAmount(entry.getValue());
            pizzaOrderRepository.save(pizzaOrder);
        }
        orders.setPrice(price);
        return orderRepository.save(orders);
    }

    public List<Orders> getAllOrders(){ return orderRepository.findAll();}

    public Orders getOrderById(Integer id){ return orderRepository.getReferenceById(id);}

    public List<Orders> getAllOrdersByStatus(ORDER_STATUS status){ return orderRepository.getAllOrdersByStatus(status);}

    public List<Orders> getAllOrdersByCustomerId(Integer customerId){ return orderRepository.getAllOrdersByCustomerId(customerId);}

    public void updateOrder(Orders orders){ orderRepository.save(orders);}

    public void updateOrderStatus(Integer orderId, ORDER_STATUS status){ orderRepository.updateActiveStatus(status, orderId, new Date());}
}
