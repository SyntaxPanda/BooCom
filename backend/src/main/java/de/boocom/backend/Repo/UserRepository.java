package de.boocom.backend.Repo;

import de.boocom.backend.Model.User;
import de.boocom.backend.Service.GenerateId;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class UserRepository {

    private GenerateId generateUUID;
    private Map<String, User> userMap= new HashMap<>();
    public void addUser(User userToAdd) {
        userMap.put(generateUUID.generateId(), userToAdd);
    }
}
