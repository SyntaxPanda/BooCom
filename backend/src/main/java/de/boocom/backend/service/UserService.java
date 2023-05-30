package de.boocom.backend.service;

import de.boocom.backend.model.UserDTO;
import de.boocom.backend.model.UserUnSave;
import de.boocom.backend.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final GenerateId generateUUID;

    public UserDTO addUser(UserUnSave userUnSaveToAdd) {
        userUnSaveToAdd.setId(generateUUID.generateId());
        userRepository.addUser(userUnSaveToAdd);
        return new UserDTO(
                userUnSaveToAdd.getName(),
                userUnSaveToAdd.getId(),
                userUnSaveToAdd.getCourse(),
                userUnSaveToAdd.getImg()
        );
    }

    public UserDTO getUserPageById(String id) {
        return userRepository.getUserPageById(id).convertUserToUserDTO();
    }

    public List<UserDTO> getAllUser() {
        return userRepository.getAllUser();
    }
}
