package de.boocom.backend.repo;

import de.boocom.backend.model.UserPost;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MongoPostRepo extends MongoRepository<UserPost, String> {

}
