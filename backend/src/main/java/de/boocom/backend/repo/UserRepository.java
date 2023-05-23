package de.boocom.backend.repo;

import de.boocom.backend.model.User;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class UserRepository {

    private Map<String, User> userMap= new HashMap<>();
    public void addUser(User userToAdd) {
        userMap.put(userToAdd.getId(), userToAdd);
    }
}
