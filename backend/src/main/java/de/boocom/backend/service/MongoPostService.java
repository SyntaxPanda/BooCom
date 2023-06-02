package de.boocom.backend.service;

import de.boocom.backend.model.UserPost;
import de.boocom.backend.repo.MongoPostRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MongoPostService {

    private final MongoPostRepo postRepo;
    public UserPost addPost(UserPost addUserPost) {
       postRepo.insert(addUserPost);
       return addUserPost;
    }
}
