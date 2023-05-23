package de.boocom.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {


    @Autowired
    MockMvc mockMvc;

    @Test
    @DirtiesContext
    void addUser() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/register/user")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                        "name":"somebody",
                        "password": "123456",
                        "course":"BOJAVA231"
                        }"""
            ))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                           {
                           "name":"somebody",
                           "course":"BOJAVA231"                       
                           }"""
                )).andExpect(jsonPath("$.id").isNotEmpty());

    }
}