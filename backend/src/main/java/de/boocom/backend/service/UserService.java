package de.boocom.backend.service;

import de.boocom.backend.model.User;
import de.boocom.backend.model.UserDTO;
import de.boocom.backend.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final GenerateId generateUUID;

    public UserDTO addUser(User userToAdd) {
        userToAdd.setId(generateUUID.generateId());
        userRepository.addUser(userToAdd);
        return new UserDTO(
                userToAdd.getName(),
                userToAdd.getId(),
                userToAdd.getCourse(),
                userToAdd.getImg()
                );
    }

    public UserDTO getUserPageById(String id){
        return userRepository.getUserPageById(id).convertUserToUserDTO();
    }
}
