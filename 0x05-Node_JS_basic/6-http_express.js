const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});

module.exports = app;
