package com.pizza.pizza_reservation.service;

import com.pizza.pizza_reservation.domain.*;
import com.pizza.pizza_reservation.domain.idclass.PizzaOrderId;
import com.pizza.pizza_reservation.dto.OrderDto;
import com.pizza.pizza_reservation.enums.ORDER_STATUS;
import com.pizza.pizza_reservation.repository.*;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.*;

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
        if (Objects.isNull(newOrder.getCity()) ||
        Objects.isNull(newOrder.getStreet()) ||
        Objects.isNull(newOrder.getPostalCode()) ||
        (Objects.isNull(newOrder.getCustomerId()) &&
        (Objects.isNull(newOrder.getPhone()) ||
        Objects.isNull(newOrder.getLastName()) ||
        Objects.isNull(newOrder.getFirstName()) ||
        Objects.isNull(newOrder.getEmail()))) ||
        newOrder.getPizzaAmount().isEmpty()
        ){
            throw new IllegalArgumentException("Any of mandatory objects are null");
        }
        Orders orders = new Orders();
        orders.setStatus(ORDER_STATUS.NEW);
        orders.setCreated(new Date());
        orders.setEstimatedDelivery(Date.from(Instant.now().plusSeconds(3600)));

        if (newOrder.getCustomerId() != null){
            orders.setCustomer(customerRepository.getById(newOrder.getCustomerId()));
        } else {
            Customer customer = new Customer();
            customer.setFirstName(newOrder.getFirstName());
            customer.setLastName(newOrder.getLastName());
            customer.setEmail(newOrder.getEmail());
            customer.setPhone(newOrder.getPhone());
            customer = customerRepository.save(customer);

            orders.setCustomer(customer);
        }
        if (newOrder.getIdAddress() != null){
            Address address = addressRepository.getById(newOrder.getIdAddress());
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
            Pizza pizza = pizzaRepository.getById(entry.getKey());
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

    public List<Address> getAllAddressesByCustomerId(Integer customerId){
        List<Orders> orders = orderRepository.getAllOrdersByCustomerId(customerRepository.getById(customerId));
        List<Address> customerAddresses = new ArrayList<>();
        if (orders == null || orders.isEmpty())
            return customerAddresses;

        orders.forEach(o -> {
            if (!customerAddresses.contains(o.getAddress())){
                customerAddresses.add(o.getAddress());
            }
        });

        return customerAddresses;

    }

    public List<Orders> getAllOrders(){ return orderRepository.findAll();}

    public Orders getOrderById(Integer id) {
        Orders o = orderRepository.readOrderById(id);
        List<PizzaOrder> pizzaOrderIds =  pizzaOrderRepository.readOrderItems(id);

        List<Pizza>  orderItems = new ArrayList<>();

        for (PizzaOrder pizzaOrder : pizzaOrderIds) {
            Pizza p = pizzaRepository.findPizzaById(pizzaOrder.getPizzaId());
            p.setIngredients(null);
            p.setAmount(pizzaOrder.getAmount());
            orderItems.add(p);
        }

        o.setOrderItems(orderItems);
        return o;
    }

    public List<Orders> getAllOrdersByStatus(ORDER_STATUS status){ return orderRepository.getAllOrdersByStatus(status);}

    public List<Orders> getAllOrdersByCustomerId(Integer customerId){ return orderRepository.getAllOrdersByCustomerId(customerRepository.getById(customerId));}

    public void updateOrder(Orders orders){ orderRepository.save(orders);}

    public void updateOrderStatus(Integer orderId, ORDER_STATUS status){ orderRepository.updateActiveStatus(status, orderId, new Date());}
}
