package de.boocom.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.boocom.backend.model.UserUnSave;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class UserUnSaveControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @DirtiesContext
    @WithMockUser(username = "Tim", password = "123")
    void addUser() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/register/user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "name":"somebody",
                                "password": "123456",
                                "course":"BOJAVA231"
                                }"""
                        )
                        .with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                                "name":"somebody",
                                "course":"BOJAVA231",
                                "img" : null                      
                                }"""
                )).andExpect(jsonPath("$.id").isNotEmpty());
    }

    @Test
    @DirtiesContext
    @WithMockUser(username = "Tim", password = "123")
    void getUserById() throws Exception {
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.post("/api/register/user")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                        "name":"somebody",
                        "password": "123456",
                        "course":"BOJAVA231"
                        }"""
                )
                .with(csrf())).andReturn();

        String content = response.getResponse().getContentAsString();

        ObjectMapper mapper = new ObjectMapper();
        UserUnSave userUnSave = mapper.readValue(content, UserUnSave.class);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/user/" + userUnSave.getId()))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                         "name":"somebody",
                         "course":"BOJAVA231",
                         "img" : null                
                        }"""
                )).andExpect(jsonPath("$.id").value(userUnSave.getId()));
    }

    @Test
    @DirtiesContext
    @WithMockUser(username = "Tim", password = "123")
    void getAllUser() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

}