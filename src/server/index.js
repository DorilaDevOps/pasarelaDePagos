
//EXPRESS
import express, { request } from 'express';
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
app.use((req, res, next) => {
 
  next(); // Llama a la función next() para pasar la solicitud al siguiente middleware
});

const dato = pyRoutes.otra;

app.get('/', async (req, res) => {
  try {
    setTimeout(() =>{
     res.send( `HOLiiiS Worlddddd! ${dato} en ${new Date()}`);
     
    console.log( "Holis");
  },2000);
  } catch (error) {
    
    console.log(error, "eeroo1");
  }
 
})
/* router.get('/', ()=> res.send(`respuets URL: ${req.url.hostname} NEW `));
/* (req, res)=> res.send(`respuets URL: ${req.url.hostname} NEW `)); ${new URL(request.url, "http://${request.headers.host")} 
// console.log(`Solicitud recibida: ${req.method} ${req.url} en ${new Date()}`);
 */ 

app.listen(port, (req, res, next) => {
  // rutaLocal =req.url;
  console.log(`Example 3 app listening on port ${port} - de la rut ${port} en ${new Date()}`);
  //console.log(`USANDO IPMORT ${mes} --- ${pyRoutes.sayBye} `);  
})
const cambo = ()=>{
  alert('ALERTA!!!')  ;/* 
if (typeof document !== 'undefined') {
  try {
    let element = document.querySelector('.button1')
  console.log(`${element.innerHTML}}`);
  } catch (error) {
    console.log("error");
  }
  
} */
}
function myFunction(){
  document.getElementById('btnOver').click();
  console.log("ALERTA!!!"); 
  alert("ALERTA");
}

/* const datoboton = document.getElementById("btnCofirm").addEventListener("click",async()=>{
  
  try {
    const datoTexto = document.getElementById("datoTxt").innerText;
    
    console.log(`Si ${JSON.stringify(mp02)} valor ${datoTexto}`);
    
  } catch (error) {
    console.log(Error.message("error"));
  }
}); */

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
