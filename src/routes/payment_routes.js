
import {Router} from 'express';
//const { Router } = require("express");

 const router = Router();

router.get('/create-order',  (req, res)=> res.send('create order'));
router.get('/success-order',  (req, res)=> res.send('success order'));
router.get('/webhook-order',  (req, res)=> res.send('pending webhook'));

var meses =['enero', 'Julio', 'Diciembre' ];
function sayBye() {
    console.log(`Bye!`);
  }

 
//export {sayBye,meses,router};
export {router};
//export default router;

/***
 * Se cambio "type": "module", en script package
 * por "type": "commonjs",
 * por eso no usaremos exportar el modulo * 
 */