const express = require('express');

const app = express();
const port = 3000;

// GET / — returns the original "Hello, World!" response
app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

// GET /evening — returns the new "Good evening" response
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
