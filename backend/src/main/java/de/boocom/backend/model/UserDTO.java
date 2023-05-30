package de.boocom.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("UsersDTO")
public class UserDTO {

    private String name;
    private String id;
    private UserCourse course;
    private String img;
}
