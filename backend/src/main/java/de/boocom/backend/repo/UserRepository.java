package de.boocom.backend.repo;

import de.boocom.backend.model.UserDTO;
import de.boocom.backend.model.UserUnSave;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class UserRepository {

    private Map<String, UserUnSave> userMap = new HashMap<>();

    public void addUser(UserUnSave userUnSaveToAdd) {
        userMap.put(userUnSaveToAdd.getId(), userUnSaveToAdd);
    }

    public UserUnSave getUserPageById(String id) {
        return userMap.get(id);
    }

    public List<UserDTO> getAllUser() {
        List<UserUnSave> userUnSaveList = new ArrayList<>(userMap.values());
        List<UserDTO> userDTOS = new ArrayList<>();

        for (UserUnSave userUnSave : userUnSaveList) {
            userDTOS.add(userUnSave.convertUserToUserDTO());
        }
        return userDTOS;
    }
}
