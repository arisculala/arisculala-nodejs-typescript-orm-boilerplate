# arisculala-nodejs-typescript-orm-boilerplate
The **arisculala-nodejs-typescript-orm-boilerplate** is a boilerplate project using nodejs, typescript, orm, postgresql with default CRUD for user


## Table of Contents
* [Getting Started](https://github.com/arisculala/arisculala-nodejs-typescript-orm-boilerplate#getting-started)
     - [Prerequisites](https://github.com/arisculala/arisculala-nodejs-typescript-orm-boilerplate#prerequisites)
     - [Installation](https://github.com/arisculala/arisculala-nodejs-typescript-orm-boilerplate#installation)

[References](https://github.com/arisculala/arisculala-nodejs-typescript-orm-boilerplate#references)
 

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
* Node.js
* npm or yarn
* PostgreSQL

### Installation
1. Clone the repository
```bash
$ git clone https://github.com/arisculala/arisculala-nodejs-typescript-orm-boilerplate.git
```
2. Copy .env.example (Configure the service by updating the .env file with your PostgreSQL connection details)
```bash
$ cd arisculala-nodejs-typescript-orm-boilerplate
$ cp .env.example .env
```
3. Install dependencies
```bash
$ npm install
```
4. Build the service
```bash
$ npm run build
```
5. Run the service
```bash
$ npm run start
```
6. Check service is running
```bash
localhost:3000/api/healthcheck/liveness
```


## References
