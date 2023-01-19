package com.pizza.pizza_reservation.service;

import com.pizza.pizza_reservation.domain.Customer;
import com.pizza.pizza_reservation.domain.Userz;
import com.pizza.pizza_reservation.dto.CustomerDto;
import com.pizza.pizza_reservation.enums.USER_ROLE;
import com.pizza.pizza_reservation.repository.CustomerRepository;
import com.pizza.pizza_reservation.repository.UserzRepository;
import com.pizza.pizza_reservation.security.CustomerPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserzRepository userzRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerPasswordEncoder passwordEncode;

    public Userz register(CustomerDto customerDto){
        if (userzRepository.findByUsername(customerDto.getUsername()).isPresent())
            throw new IllegalArgumentException();
        Userz userz = new Userz();

        userz.setUsername(customerDto.getUsername());
        userz.setPassword(passwordEncode.getPasswordEncoder().encode(customerDto.getUsername()));
        userz.setRole(USER_ROLE.REGISTERED_CUSTOMER);

        userz = userzRepository.save(userz);

        Customer customer = new Customer();
        customer.setFirstName(customerDto.getFirstName());
        customer.setLastName(customerDto.getLastName());
        customer.setPhone(customerDto.getPhone());
        customer.setEmail(customerDto.getEmail());
        customer.setUserId(userz.getId());

        customer = customerRepository.save(customer);

        userz.setCustomer(customer);

        return userzRepository.save(userz);
    }
}
