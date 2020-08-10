# Library App

## Overview

Library App is built using the following,

- Frontend : Single page ReactJS
- Backend : RESTful APIs exposed using Node server
- Used scss for styling and jest/mocha for unit tests
- Dockerfile is provided for both server and client.

## Prerequisite

To run this project, Node(v11.15.0), npm(v6.14.5), MongoDB(v3.6.3) needs to be installed

## Server side

- Node server listening on port 5000
- Libraries used
  - bcrypt : To hash the passwords
  - joi : For validations
  - lodash : For utility functions.
  - config : To handle configuration for various deployment environments.
  - mongoose : MongoDB Object modeling tool.
  - mocha, supertest, should : For unit tests

### Start express server

- To start express server, invoke,
  `cd server; npm install; node index.js`
- To run unit tests, invoke, `cd server; npm test`

## Client Side

- React App listening on port 3000
- React components are created using React hooks.
- Libraries used
  - axios : To send AJAX request to server
  - react-router-dom : For navigation between components
  - react-redux, react-thunk : For storing application state
  - node-sass, sass-loader : For compiling scss files into css.
  - jest, enzyme : For unit tests

### Start React Application

- To start react application invoke,
  `cd client; npm install; npm start`
- To run unit tests, invoke,
  `cd client; npm test`

## Miscellaneous

### Improvements

- Backend
  - JWT token expiry to be handled better.
  - RBAC to be supported.
  - SaaS MongoDB with authentication.
- Frontend
  - RBAC to be added.
  - Users table access will be limited only to admin user.
  - Edit & Delete of User & Book table.
  - Borrow & Reserve book feature.
  - Bootstrap & MaterialUI libraries can be used for better UI design.
  - Error handling.
- CI/CD
  - CI: GitHub Actions to be explored.
  - CD: Application deployment to be handled through Helm Charts for kubernetes.

### Development environment

- OS : Ubuntu 18
- IDE : VS Code
- Node : 11.15
- npm : 6.14.5

## Author

- Anitha Manickam
