package com.pizza.pizza_reservation;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class PizzaControllerTests extends ControllerTestAncestor {

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    @Test
    public void getAllPizzasTest() throws Exception {
        String uri = "/api/pizza/list";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                                                                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(OK, status);
        assertNotNull(mvcResult.getResponse().getContentAsString());
        JSONArray json = new JSONArray(mvcResult.getResponse().getContentAsString());
        System.out.println(json.toString(4));
    }

}
