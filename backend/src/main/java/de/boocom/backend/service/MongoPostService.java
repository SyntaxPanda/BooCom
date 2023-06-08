package de.boocom.backend.service;

import de.boocom.backend.model.UserPost;
import de.boocom.backend.repo.MongoPostRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MongoPostService {

    private final MongoPostRepo postRepo;
    public UserPost addPost(UserPost addUserPost) {
       postRepo.insert(addUserPost);
       return addUserPost;
    }

    public List<UserPost> getAllPosts() {
        return postRepo.findAll();
    }

    public UserPost getPostById(String postId) {
        Optional<UserPost> userPost = postRepo.findById(postId);
        return userPost.get();
    }
}
