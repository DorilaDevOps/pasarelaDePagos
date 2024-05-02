
//EXPRESS
//import {express} from 'express';
const express = require('express');

import payRoutes from './routes/payment_routes.js';
//const payRoutes = require ('./routes/payment_routes.js');

// server
//import { createServer } from 'node:http';

const app = express();
const port = 3000;

app.use(payRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example 3 app listening on port ${port}`)
})


/* ---------  creando server --------
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
*/
/* --------- TERMINA  creando server --------*/
