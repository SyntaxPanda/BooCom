package de.boocom.backend.controller;

import de.boocom.backend.model.UserDTO;
import de.boocom.backend.model.UserUnSave;
import de.boocom.backend.service.MongoUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final MongoUserDetailsService userService;

    @PostMapping("/register/user")
    public UserDTO addUser(@RequestBody UserUnSave userUnSaveToAdd) {
        return userService.addUser(userUnSaveToAdd);
    }

    @GetMapping("/user/{id}")
    public UserDTO getUserPageById(@PathVariable String id) {
        return userService.getUserPageById(id);
    }

    @GetMapping("/users")
    public List<UserDTO> getAllUser() {
        return userService.getAllUser();
    }

    @PostMapping("/login")
    void login() {
        SecurityContextHolder.getContext().getAuthentication().getName();
    }

}
