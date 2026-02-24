# hao-backprop-test

A minimal Node.js tutorial server built with [Express.js](https://expressjs.com/). This project demonstrates basic HTTP routing by serving two endpoints that return plain-text responses.

## Endpoints

| Method | Path       | Response          | Status |
|--------|------------|-------------------|--------|
| GET    | `/`        | `Hello, World!\n` | 200    |
| GET    | `/evening` | `Good evening`    | 200    |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher

### Installation

Install the project dependencies:

```bash
npm install
```

### Running the Server

Start the server using npm:

```bash
npm start
```

Or run it directly with Node.js:

```bash
node server.js
```

The server will start on port **3000**. You can access it at [http://localhost:3000/](http://localhost:3000/).
