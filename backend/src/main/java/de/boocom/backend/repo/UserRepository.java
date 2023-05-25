package de.boocom.backend.repo;

import de.boocom.backend.model.User;
import de.boocom.backend.model.UserDTO;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class UserRepository {

    private Map<String, User> userMap = new HashMap<>();

    public void addUser(User userToAdd) {
        userMap.put(userToAdd.getId(), userToAdd);
    }

    public User getUserPageById(String id) {
        return userMap.get(id);
    }

    public List<UserDTO> getAllUser() {
        List<User> userList = new ArrayList<>(userMap.values());
        List<UserDTO> userDTOS = new ArrayList<>();

        for (User user : userList) {
            userDTOS.add(user.convertUserToUserDTO());
        }
        return userDTOS;
    }
}
