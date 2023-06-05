package de.boocom.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class PostControllerTest {

    @Autowired
    MockMvc mockMVC;
    @Test
    @DirtiesContext
    @WithMockUser(username = "Test", password = "123")
    void addPost() throws Exception {
        mockMVC.perform(MockMvcRequestBuilders.post("/api/post/new")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                                {
                                "title":"te",
                                "description": "123456",
                                "userName":"test"
                                }"""
                ).with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                                "title":"te",
                                "description": "123456",
                                "userName":"test"               
                                }"""
                )).andExpect(jsonPath("$.postId").isNotEmpty());
    }
    @Test
    @DirtiesContext
    @WithMockUser(username = "Test", password = "123")
    void checkIfIsEmptyList() throws Exception {
        mockMVC.perform(MockMvcRequestBuilders.get("/api/posts"))
                .andExpect(status().isOk())
                .andExpect(content().json(  "[]"));

    }
}