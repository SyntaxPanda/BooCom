package de.boocom.backend.service;

import de.boocom.backend.model.UserDTO;
import de.boocom.backend.model.UserUnSave;
import de.boocom.backend.repo.MongoUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MongoUserDetailsService implements UserDetailsService {
    private final MongoUserRepo repo;
    private final GenerateId generateUUID;
    private final PasswordEncoder passwordEncoder = Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        UserUnSave optionalUserUnSave = repo.findUserUnSaveByName(name)
                .orElseThrow(() -> new UsernameNotFoundException("User with this username: " + name + " not found"));
        return new User(optionalUserUnSave.getName(), optionalUserUnSave.getPassword(), List.of());
    }

    public UserDTO addUser(UserUnSave userUnSave) {
        userUnSave.setId(generateUUID.generateId());
        userUnSave.setPassword(passwordEncoder.encode(userUnSave.getPassword()));
        repo.insert(userUnSave);
        return new UserDTO(
                userUnSave.getName(),
                userUnSave.getId(),
                userUnSave.getCourse(),
                userUnSave.getImg()
        );
    }

    public UserDTO getUserPageById(String id) {
        Optional<UserUnSave> userUnSave = repo.findById(id);
        return userUnSave.get().convertUserToUserDTO();
    }

    public List<UserDTO> getAllUser() {
        List<UserUnSave> userUnSaves = new ArrayList<>(repo.findAll());
        List<UserDTO> userDTOS = new ArrayList<>();

        for (UserUnSave userUnSave : userUnSaves) {
            userDTOS.add(userUnSave.convertUserToUserDTO());
        }
        return userDTOS;
    }
}
