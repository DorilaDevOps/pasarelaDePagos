
import {Router} from 'express';
//const { Router } = require("express");

import {crearOrden, guardaParametroURL, verMensajes,otra} from '../controllers/pago.controller.js';

 const router = Router();


router.get('/create-order',  crearOrden);
router.get('/success-order',  (req, res)=> res.send('success order'));
router.get('/webhook',  (req, res)=> res.send('ver WebHooks '));

router.get('/enviarMsj/:nombre', guardaParametroURL);
router.get('/verMsj', verMensajes);

// Ruta para manejar todas las demás solicitudes
/* router.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});
 */

router.get('/Basedatos', async (req, res) => {
  res.send(`GET Hacia controlador que hace consulta a BD y devuelven una respuesta JSON \nsi error devuelve estado 500`);
  console.log(`GET Hacia controlador que hace consulta a BD y devuelven una respuesta JSON \nsi error devuelve estado 500`);
});

var meses =['enero', 'Julio', 'Diciembre' ];
function sayBye() {
    console.log(`Bye!`);
  }

 
//export {sayBye,meses,router};
export {router, otra};
//export default router;

/***
 * Se cambio "type": "module", en script package
 * por "type": "commonjs",
 * por eso no usaremos exportar el modulo * 
 */