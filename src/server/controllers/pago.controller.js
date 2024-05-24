// Step 1: Importa las partes del módulo que deseas utilizar
import { MercadoPagoConfig, Payment, Customer } from "mercadopago";
import mercadopago from 'mercadopago';
import { loadMercadoPago } from "@mercadopago/sdk-js";
import {fechaHoy, otraFecha} from '../Utils/fecha.js';
import Usuario from '../Models/Usuario.js'


const tokenVendedor = 'TEST-3098823193955224-050414-3f1d98d54ca09994b2d6a7983b8fa15d-1467075401';
const YOUR_PUBLIC_KEY= "TEST-1e78dd1d-8753-4f08-8ed5-0a3cb08f2cd3";
const opciones= { timeout: 5000, idempotencyKey: "abc" };

//Prueba - 0
//const mp01 = new MercadoPago(YOUR_PUBLIC_KEY);
const mp02 = new MercadoPagoConfig(YOUR_PUBLIC_KEY);
try {
  console.log(`Si ${JSON.stringify(mp02)} valor`);  
} catch (error) {
  console.log(Error.message("error"));
}

/**
 * Prueba - 3 
 * Initialize the client object 
 */
const client2 = new MercadoPagoConfig({ accessToken: tokenVendedor, options: { timeout: 5000, idempotencyKey: "abc" },locale:"es-UY"} );
const customer = new Customer(client2);
try {
  console.log(customer);
  // console.log(`Cliente- ${client2}- Data - ${JSON.stringify(client2.options)}`);
  console.log(`Cliente- ${Json.stringify(customer)}- Data - ${JSON.stringify(customer.options)}`);
  // console.log(customer.get(customer.id));
} catch (error) {
  console.log("No salio");
}


//crea tarjetas de ese cliente
const body2 = {
  email: "my.user@example.com"
};

const e_mail = "my.user@example.com";

// Prueba 3: Inicializar el objeto API
/* const payment = new Payment(client); */

// Step 4: Create the request object
/* const body = {
  transaction_amount: 2000,
  description: "<DESCRIPTION>",
  payment_method_id: "master",
  payer: {
    email: e_mail,
    id: "345"
  },
}; */

// Step 5: Create request options object - Optional
/* const requestOptions = {
  idempotencyKey: "<IDEMPOTENCY_KEY>",
}; */

const items = [];

// Step 6: Make the request object
/* export const creandoPago = payment
  .create({ body, requestOptions })
  .then(console.log())
  .catch(console.log); */

export const otra = "andres Controller";

export const crearOrden = async (req, res) => {

  const client = new MercadoPagoConfig({
 
    accessToken:  'TEST-5417878203690460-050414-ad0526de3f85f3c3138e46265f8e402b-1349912905',
    options: { timeout: 5000, idempotencyKey: "abc" },
  }); try {
    res.send("SI DANILO"+ JSON.stringify(client)); 
    console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
    console.log("crea cliente: " + JSON.stringify(client));
  } catch (error) {
    console.log(error,'erro');
    res.send("NO compara DANILO"); 
    
  }

  
    /*mercadopago.configure({
    access_token:
      "TEST-3098823193955224-050414-3f1d98d54ca09994b2d6a7983b8fa15d-1467075401",
  });
/** Respuesta de ejemplo cliente
 * {
  "id": 123,
  "nickname": "TEST45I5GYIH",
  "password": "qatest6730",
  "site_status": "active",
  "site_id": "MLA",
  "description": "a description",
  "email": "test_user_123@testuser.com",
  "date_created": "2022-02-01T12:00:00.000-04:00",
  "date_last_updated": "2022-02-01T12:00:00.000-04:00"
}
 */
  //crea orden de compra con los productos que quiero cobrar
/*   const result = await mercadopago.preferences.create({
    items: [
      {
        id:"14",
        title: "laptop",
        description:"Azul",
        unit_price: 500,
        currency_id: "USD",
        quantity: 1,
      },
        {
            id: "item-ID-1234",
            title: "Meu produto",
            description: "API TRANSPARENTE MARKETPLACE",
            currency_id: "BRL",
            quantity: 1,
            unit_price: 75.76
        }
    ],
  }); 
  console.log(result); */

  /* console.log("DANILO GAY..");
  res.send("se crea la orden de compara DANILO");  */
  
};


export const guardaParametroURL =  (req,res,next)=>{
    try {
    const dato = req.params.nombre;
    const elUsuario = new Usuario(dato);
    parametros.unshift(elUsuario);
    let otiaF = otraFecha();
    let start = fechaHoy();

    console.log('starting timer...');
    setTimeout(() => {
      const millis = Date.now() - start;
    
      console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
      // Expected output: "seconds elapsed = 2"
    }, 2000);

    const birthday = new Date('January 14, 1973 23:15:30');
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6
console.log(day1);

var d1 = new Date();
var d2 = 1 * new Date();
var d3 = new Date().getTime();

console.log(`D1 = ${d1} OTIT ${otiaF}`);
console.log(d1);
console.log(d2);
console.log(d3);

      console.log(` array ${parametros.length}-¡Hola, ${dato}! \nMis Datos: ${JSON.stringify(parametros)}- V otraFecha --${otiaF.toString()} --START ${start.toString()}`);
    // res.redirect("http://localhost:3000/verMensajes");
    res.send(` array ${parametros.length}-¡Hola, ${dato}! \nMis Datos: ${JSON.stringify(parametros)}- `);
    
    } catch (error) {
      console.log(error);
    }
}
export const verMensajes = async (req, res,next)=> {
  try {
    setTimeout(()=>{
      res.send(`Mensaje: -- ${parametros[0].hablar()}***************`);
      // document.location.reload();
      console.log(`Mensaje: -- ${parametros[0].hablar()}*****************)}`);
    },3000) 
  } catch (error) {
    res.send(`mensaje de error`);
  }
}
const parametros =[];
