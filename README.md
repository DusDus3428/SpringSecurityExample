# SpringSecurityExample

This is an example project to demonstrate how to secure your Spring Boot web application using Spring Security. It was created for two Medium articles I wrote, and you can check them out here: 
* [How to Secure Your Web Application Part I: Creating a Web App With Spring Boot And Angular](https://medium.com/edataconsulting/how-to-secure-your-web-application-part-i-creating-a-web-app-with-spring-boot-and-angular-50d5e9e2fe96)
* [How to Secure Your Web Application Part II: Securing Your Web Application With Spring Security](https://medium.com/edataconsulting/how-to-secure-your-web-application-part-ii-securing-your-web-application-with-spring-security-5a876e2b5b76)

## Prerequisites
* [OpenJDK 11](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/what-is-corretto-11.html)
* [Maven 3.8.4 or higher](https://maven.apache.org/download.cgi)
* [Node.js 16.14.0 or higher](https://nodejs.org/en/)
* [Anglar 13 or higher](https://angular.io/guide/setup-local)
* An IDE of your choosing. I used [IntelliJ IDEA](https://www.jetbrains.com/idea/)

## Running the Back End
Depending on the IDE you use, these instructions may be different for you. I personally like to use the terminal integrated in IntelliJ IDEA.
1. Open a terminal and navigate to the folder back-end-spring-security-example
2. Run this command to build the project: <pre>mvn clean install</pre>
3. Run this command to run the project: <pre>mvn spring-boot:run</pre>

## Running the Front End
Depending on the IDE you use, these instructions may be different for you. I personally like to use the terminal integrated in IntelliJ IDEA.
1. Open a terminal and navigate to the folder front-end-spring-security-example
2. Run this command to install the necessary dependencies: <pre>npm install</pre>
3. Run this command to run the project: <pre>npm start</pre>
