package de.boocom.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    private String name;
    private String password;
    private String id;
    private UserCourse course;
    private String img;

    public UserDTO convertUserToUserDTO() {
        return new UserDTO(
                this.getName(),
                this.getId(),
                this.getCourse(),
                this.getImg()
        );
    }
}