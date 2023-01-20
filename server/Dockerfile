FROM maven:3.6.0-jdk-11-slim AS build
COPY . /app/
RUN mvn -f /app/pom.xml clean package -P production

FROM openjdk:11
COPY --from=build /app/target/*.jar /app/app.jar

ENTRYPOINT ["java", "-jar","/app/app.jar"]