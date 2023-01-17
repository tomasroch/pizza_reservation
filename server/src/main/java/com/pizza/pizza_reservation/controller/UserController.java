package com.pizza.pizza_reservation.controller;

import com.pizza.pizza_reservation.domain.Userz;
import com.pizza.pizza_reservation.dto.CustomerDto;
import com.pizza.pizza_reservation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("register")
    public ResponseEntity<Userz> register(@RequestBody CustomerDto customerDto){
        userService.register(customerDto);
        return ResponseEntity.ok(null);
    }
}
