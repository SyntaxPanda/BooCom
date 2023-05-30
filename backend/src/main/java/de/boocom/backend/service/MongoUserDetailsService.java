package de.boocom.backend.service;

import de.boocom.backend.model.UserUnSave;
import de.boocom.backend.repo.MongoUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MongoUserDetailsService implements UserDetailsService {
    private final MongoUserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        UserUnSave optionalUserUnSave = repo.findUserUnSaveByName(name)
                .orElseThrow(() -> new UsernameNotFoundException("User with this username: " + name + " not found"));
        return new User(optionalUserUnSave.getName(), optionalUserUnSave.getPassword(), List.of());
    }

    public void addUser(UserUnSave userUnSave) {
        repo.insert(userUnSave);
    }

    public
}
