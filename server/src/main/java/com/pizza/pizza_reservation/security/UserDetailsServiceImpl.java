package com.pizza.pizza_reservation.security;

import com.pizza.pizza_reservation.domain.Userz;
import com.pizza.pizza_reservation.enums.USER_ROLE;
import com.pizza.pizza_reservation.repository.UserzRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.InvalidParameterException;
import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private CustomerPasswordEncoder passwordEncoder;

    @Autowired
    private UserzRepository userzRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Userz> user = userzRepository.findByUsername(username);
        return user.orElseThrow(InvalidParameterException::new);
        /*Userz user = new Userz();
        user.setUsername("test");
        user.setPassword(passwordEncoder.getPasswordEncoder().encode("password"));
        user.setRole(USER_ROLE.ADMIN);
        user.setId(1);
        return user;*/
    }
}
