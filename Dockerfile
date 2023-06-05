FROM openjdk:17

EXPOSE 8080

ADD backend/target/BooCom.jar BooCom.jar

CMD [ "sh", "-c", "java -jar /BooCom.jar" ]