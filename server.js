const express = require('express');
const helmet = require('helmet');

// Routers


const server = express();
server.use(express.json());

server.use(helmoet());



server.get('/', (req, res) => {
  res.send(`<h1>Hello from the API</h1>`);
}) 


module.exports = server;