
//EXPRESS
import express from 'express';
//const express = require('express');

//RUTA
//import {router, meses} from './routes/payment_routes.js';
//import router from './routes/payment_routes.js';
import * as pyRoutes from './routes/payment_routes.js';
//const router = require ('./routes/payment_routes.js');

// server
//import { createServer } from 'node:http';

const app = express();
const port = 3000;

 //const mes = pyRoutes.meses;
///app.use(pyRoutes);
app.use(pyRoutes.router);

app.get('/', (req, res) => {
  res.send('Hello Worlddddd!')
})
app.get('/lala', (req, res) => {
  res.send('Hello LALA!')
})

app.listen(port, () => {
  console.log(`Example 3 app listening on port ${port}`)
  //console.log(`USANDO IPMORT ${mes} --- ${pyRoutes.sayBye} `);
  console.log(`USANDO IPMORT ${pyRoutes.router} `);
  
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
