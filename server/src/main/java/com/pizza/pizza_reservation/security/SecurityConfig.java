package com.pizza.pizza_reservation.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import javax.servlet.http.HttpServletResponse;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private CustomerPasswordEncoder passwordEncoder;

    @Autowired
    private JwtFilter jwtFilter;

    private final String ADMIN_ROLE = "ROLE_ADMIN";

    @Override @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }

    //Authentication
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder.getPasswordEncoder()) ;
    }

    //Authorization
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().configurationSource(r -> new CorsConfiguration().applyPermitDefaultValues());

        http = http.csrf().disable();

        http = http
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and();

        http = http.exceptionHandling().authenticationEntryPoint((request, response, ex) ->{
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
        }).and();

        http.authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "*").permitAll()
                .antMatchers("/api/order/create").permitAll()
                .antMatchers("/api/pizza/list/**").permitAll()
                .antMatchers("/api/order/**").authenticated()
                .antMatchers("/api/pizza/**").hasAuthority(ADMIN_ROLE)
                .anyRequest().permitAll();

        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

    }

        /*@Value( "${rest.user}" )
    private String user;

    @Value( "${rest.pw}" )
    private String password;

    @Bean // in memory user
    public UserDetailsService users() {
        // The builder will ensure the passwords are encoded before saving in memory
        UserDetails admin = User.builder()
                                .username(user)
                                .password(password)
                                .roles("ADMIN")
                                .build();
        return new InMemoryUserDetailsManager(admin);
    }*/

}
