# Cypress Testing Angular Based Application

This repo was forked from https://github.com/cypress-io/cypress-heroes-app to practice Cypress testing (End to end & API testing)

## Getting Started

The repo folder contains two pertinent folders:

client: The Angular front-end app
server: NestJS back-end app that provides the API

Running `npm install` from above installs the dependencies for both apps.

Install Cypress via `npm install cypress`

To start the app run `npm start` the app will launch at http://localhost:4200

Here are the credentials for the logins:

Normal User: username: test@test.com, password: test123

Admin User: username: admin@test.com, password: test123

Logging in as a normal user will allow you to like and hire the hero. Notice that when doing so, the number of fans and saves increases (respectively).
You gain access to add, edit, and delete heroes as an admin user.
 
For additional info, open the guide at
[https://cypress-io.github.io/cypress-heroes-app/](https://cypress-io.github.io/cypress-heroes-app/)
and continue in the Getting Started section.

If you cannot access the above URL, you can view the guide locally by running
the following from the root directory:

```bash
npm run guide
```

This will serve the guide at [http://localhost:8080](http://localhost:8080)

Thanks for visiting!
