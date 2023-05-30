FROM openjdk:17

EXPOSE

ADD backend/target/BooCom.jar BooCom.jar

CMD["sh", "-c", "java -jar /BooCom.jar"]