package de.boocom.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document("Posts")
public class UserPost {

    private String id;
    private String titel;
    private String description;
    private String userName;

}
