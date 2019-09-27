import app from './server';
import http from 'http';

const { PORT = 7000 } = process.env;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log('Server is running at port %s', PORT);
});

module.exports = server;
