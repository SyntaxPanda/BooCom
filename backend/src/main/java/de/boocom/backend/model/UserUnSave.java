package de.boocom.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("UsersUnSave")
public class UserUnSave {

    private String name;
    private String password;
    private String id;
    private UserCourse course;
    private String img;

    public UserDTO convertUserToUserDTO() {
        return new UserDTO(
                this.name,
                this.id,
                this.course,
                this.img
        );
    }
}