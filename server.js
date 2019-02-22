const express = require('express');
const helmet = require('helmet');

// Routers
const dishesRouter = require('./api/dishRouter.js');


const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/dishes', dishesRouter);



server.get('/', (req, res) => {
  res.send(`<h1>Hello from the API</h1>`);
}) 


module.exports = server;