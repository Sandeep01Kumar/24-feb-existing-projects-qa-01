const express = require('express');
const app = express();
const port = 3000;

// Route handler for root path — preserves original "Hello, World!" response
app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

// Route handler for /evening path — new endpoint returning "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the Express server on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
