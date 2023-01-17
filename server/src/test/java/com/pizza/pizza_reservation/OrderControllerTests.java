package com.pizza.pizza_reservation;

import com.pizza.pizza_reservation.dto.OrderDto;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class OrderControllerTests extends ControllerTestAncestor{

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    @Test
    public void postNewOrderTest() throws Exception {
        String uri = "/api/order/create";
        OrderDto order = new OrderDto();
        order.setCity("City");
        order.setEmail("email@email.cz");
        order.setPhone("720666333");
        order.setLastName("LAstName");
        order.setFirstName("FirstName");
        order.setPostalCode("28002");
        order.setStreet("Street");
        Map<Integer, Integer> pizza = new HashMap<Integer, Integer>();
        pizza.put(1,1);
        order.setPizzaAmount(pizza);

        mvc.perform(MockMvcRequestBuilders.post(uri)
                                          .content(mapToJson(order))
                                          .contentType(MediaType.APPLICATION_JSON)
                                          .accept(MediaType.APPLICATION_JSON_VALUE))
           .andExpect(status().isOk());

    }
}
