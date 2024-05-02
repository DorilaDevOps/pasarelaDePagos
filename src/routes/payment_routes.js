const { Router } = require("express");

const router = Router();

router.get('/create-order',  (req, res)=> res.send('create order'));
router.get('/success-order',  (req, res)=> res.send('success order'));
router.get('/webhook-order',  (req, res)=> res.send('pending webhook'));


export default router;
//"type": "module", ente script