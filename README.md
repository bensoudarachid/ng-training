I'm happy to present the Angular version of the Training (or School) WebApp. This is a prototype of data management application for Schools and Training centers

This is still an incomplete description file

# NgTraning

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).





NgTraning-App is a Saas Single Page App (SPA) based on Angular and Spring Boot Rest API

This project is firstly about covering and learning all basic features of a modern SPA: All the tools a developer needs to have a nice and fast development routine, a project ready, solid and intuitive code architecture and the basics of the main technologies involved. It's also about combining the old solid Java Back End world with the modern Front End technologies and getting the best of both(see list below)

The App is composed of two projects. Ng-Training is the Front-End part.

This is a work in progress. The code is not optimal yet

##Covered topics:

##Performance:
- Introduction to reactive programming using Akka concurrency and cluster technology
- Spring-Rest API delivers Optmized Image Sizes using Batik from regular images formats + SVG
- Lazy loading
- progressive image loading

##Security:
- OAuth-2 Authentication and Role based Authorization, JDBC TokenStore

##Architecture:
- Feature Module oriented Front End Code Architecture
- Classic back end 3 Tier architecture with REST controller, Service, Repository. Redis cache, Rabbit messaging for websockets
 
##Testing:
 

##Development:
- Angular cli 

##Front End:
- One Scss file per Angular component
- Parallax scrolling
- Use of Angular Bootstrap Material Design framework
- Reactive forms
- Modal dialogs for login and error messages
- Http Interceptor
- Ngrx/Store and entities
- Injectable dependencies like services and effects
 
 
##Back End:
- Letsencrypt automatic certificate renewal through Spring Scheduler
- Json automatic date conversion in Java (@JsonFormat)
- Get Images as dynamic, access-protected Spring-REST Api resources
- Iterative DB-Update using Flyway. Update runs automatically on all tenant DB's on App Boot 
- Multitenancy through URL app subdomain 'tenantxy.school.domain' . Each tenant has his own DB and own storage
- Server side form validation
- Combined Jackson and Hibernate annotations for One-to-Many relationships
 

