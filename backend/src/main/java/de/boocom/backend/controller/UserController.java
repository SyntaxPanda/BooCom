package de.boocom.backend.controller;

import de.boocom.backend.model.User;
import de.boocom.backend.model.UserDTO;
import de.boocom.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping ("/register/user")
    public UserDTO addUser(@RequestBody User userToAdd){
        return userService.addUser(userToAdd);
    }
}
