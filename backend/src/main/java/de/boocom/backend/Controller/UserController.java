package de.boocom.backend.Controller;

import de.boocom.backend.Model.User;
import de.boocom.backend.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping ("/register/addUser")
    public void addUser(User userToAdd){
        userService.addUser(userToAdd);
    }
}
