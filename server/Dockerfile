FROM maven:3.8.3-openjdk-17 AS build
COPY . /server/

RUN mvn -f /server/pom.xml clean package

# Run stage
FROM openjdk:17
COPY --from=build /server/target/*.jar /server/pizza_reservation-1.0.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar","/server/pizza_reservation-1.0.jar"]

