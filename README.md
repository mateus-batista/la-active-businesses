##About the project

### Back-end

#### Language
The project was built using [Kotlin](https://kotlinlang.org/) backed up by [Java 11](https://openjdk.java.net/projects/jdk/11/) 
and [Maven](https://maven.apache.org/).

#### Framework

[Spring Boot](https://spring.io/projects/spring-boot) was choose because makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".

#### Query language

[GraphQL](https://graphql.org/) was choose to provide an understandable description of the data in the API. 
You can check the current schema at schema.graphqls in the project sources.

### Front-end

#### Language
The project was writen with [Typescript](https://www.typescriptlang.org/), a language that adds static type definitions to Javascript.

#### Libraries
[React](http://reactjs.org) an open-source, front end, JavaScript library for building user interfaces or UI components.

[Apollo Client](https://www.apollographql.com/docs/react/) a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

[Emotion](https://emotion.sh/docs/introduction) a library designed for writing css styles with JavaScript.

[React Router](https://reactrouter.com/) a collection of navigational components that compose declaratively with your application.

## How to run this project

After the initialization you can access: http://localhost:8080

### With Maven

Using the provider wrapper, run:

```
./mvnw spring-boot:run
```

### With Docker

The Spring Framework provides a tool to easy create docker images, to build one you can run: 
```
./mvnw spring-boot:build-image -Dspring-boot.build-image.imageName=la-active-businesses
```
or, you can pull the image from the remote repository:
```
docker pull batistamateus/la-active-businesses
```
and then execute it with: 
```
docker run -p 8080:8080 --name=la-active-businesses la-active-businesses
```



