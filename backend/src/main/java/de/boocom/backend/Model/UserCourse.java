package de.boocom.backend.Model;

public enum UserCourse {

    BOJAVA231 ("bo-java-23-1");

    private String course;

    UserCourse(String course) {
        this.course = course;
    }

    public String getCourse() {
        return course;
    }
}
