const http = require('node:http');

const app = http.createServer();

app.on('request', (req, res) => {
  const responseMsg = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseMsg.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseMsg));
});

app.listen(1245, 'localhost', () => {
  console.log('Server is listening on port 12345');
});
