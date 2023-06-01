package de.boocom.backend.repo;

import de.boocom.backend.model.UserUnSave;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface MongoUserRepo extends MongoRepository<UserUnSave, String> {

    public Optional<UserUnSave> findUserUnSaveByName(String name);
}
