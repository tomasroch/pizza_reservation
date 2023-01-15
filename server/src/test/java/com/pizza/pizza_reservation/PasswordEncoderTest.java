package com.pizza.pizza_reservation;

import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration
public class PasswordEncoderTest {

    @Test
    public void encode_password(){
        System.out.println(new BCryptPasswordEncoder().encode("test"));
    }
}
