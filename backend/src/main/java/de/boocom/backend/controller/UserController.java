package de.boocom.backend.controller;

import de.boocom.backend.model.UserDTO;
import de.boocom.backend.model.UserUnSave;
import de.boocom.backend.service.MongoUserDetailsService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final MongoUserDetailsService userService;

    @GetMapping("/user/me")
    public String getMe1(Principal principal) {
        if (principal != null) {
            return principal.getName();
        }
        return "AnonymousUser";
    }

    @GetMapping("/user/me2")
    public String getMe2() {
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

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

    @PostMapping("/logout")
    String logout(HttpSession httpSession) {
        httpSession.invalidate();
        SecurityContextHolder.clearContext();
        return "logged out";
    }
}
