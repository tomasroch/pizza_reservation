package com.pizza.pizza_reservation.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Value( "${rest.user}" )
    private String user;

    @Value( "${rest.pw}" )
    private String password;

    @Bean
    public UserDetailsService users() {
        // The builder will ensure the passwords are encoded before saving in memory
        /*UserDetails user = User.builder()
                               .username("user")
                               .password("{bcrypt}$2a$10$LJaHeoLSP9dibulhKrg7dOKLkxZkuYZkT4kFY6w8RkKIyYSqSaDk6")
                               .roles("USER")
                               .build();*/
        UserDetails admin = User.builder()
                                .username(user)
                                .password(password)
                                .roles("ADMIN")
                                .build();
        return new InMemoryUserDetailsManager(admin);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        super.configure(http);
    }

}
