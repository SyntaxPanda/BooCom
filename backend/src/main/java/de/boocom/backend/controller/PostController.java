package de.boocom.backend.controller;

import de.boocom.backend.model.UserPost;
import de.boocom.backend.service.MongoPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PostController {

    private final MongoPostService postService;
    @PostMapping("/post/new")
    public UserPost addPost(@RequestBody UserPost addUserPost){
        return postService.addPost(addUserPost);
    }

    @GetMapping("/posts")
    public List<UserPost> getAllPosts(){
        return postService.getAllPosts();
    }

}
