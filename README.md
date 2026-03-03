# hao-backprop-test

A tutorial Node.js HTTP server built with [Express.js](https://expressjs.com/) 5.x. This project demonstrates basic route handling with two endpoints that return plain-text responses.

## Endpoints

| Method | Path       | Response            | Status |
|--------|------------|---------------------|--------|
| GET    | `/`        | `Hello, World!\n`   | 200 OK |
| GET    | `/evening` | `Good evening`      | 200 OK |

## Installation

Install the project dependencies (Express.js) with npm:

```bash
npm install
```

## Starting the Server

Launch the server on port **3000** using either command:

```bash
node server.js
```

or

```bash
npm start
```

Once running, the server logs a confirmation message to the console. You can then reach the endpoints at:

- [http://localhost:3000/](http://localhost:3000/) — returns *Hello, World!*
- [http://localhost:3000/evening](http://localhost:3000/evening) — returns *Good evening*

## Technology

- **Runtime**: Node.js
- **Framework**: Express.js 5.x
