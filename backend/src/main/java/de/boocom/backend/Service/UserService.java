package de.boocom.backend.Service;

import de.boocom.backend.Controller.UserController;
import de.boocom.backend.Model.User;
import de.boocom.backend.Repo.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class UserService {

    private final UserRepository userRepository;

    public void addUser(User userToAdd) {
        userRepository.addUser(userToAdd);
    }
}
