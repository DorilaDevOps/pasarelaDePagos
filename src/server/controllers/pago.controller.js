// Step 1: Importa las partes del módulo que deseas utilizar
import { MercadoPagoConfig, Payment, Customer } from "mercadopago";
import mercadopago from 'mercadopago';
import { loadMercadoPago } from "@mercadopago/sdk-js";


const tokenVendedor = "TEST-3098823193955224-050414-3f1d98d54ca09994b2d6a7983b8fa15d-1467075401";
const YOUR_PUBLIC_KEY= "TEST-1e78dd1d-8753-4f08-8ed5-0a3cb08f2cd3";

//paso -1
//const mp01 = new MercadoPago(YOUR_PUBLIC_KEY);
const mp02 = new MercadoPagoConfig(YOUR_PUBLIC_KEY);
try {
  console.log(`Si ${JSON.stringify(mp02)} valor`);  
} catch (error) {
  console.log(Error.message("error"));
}

//paso0
const client2 = new MercadoPagoConfig({ accessToken: tokenVendedor });

/* await loadMercadoPago();*/
const mp = new MercadoPagoConfig(tokenVendedor,{
  locale:"es-AR"
});
try {
  console.log("WI"+JSON.stringify(mp));
} catch (error) {
  console.log('NON message');
}; 

const customer = new Customer(client2);
try {
  console.log(customer.get(customer.id));
} catch (error) {
  console.log("No salio");
}

// paso 2: Initialize the client object 
/*token de integracion del usu vendedor Test prueba*/
/* const client = new MercadoPagoConfig({
 
  accessToken:  'TEST-5417878203690460-050414-ad0526de3f85f3c3138e46265f8e402b-1349912905',
  options: { timeout: 5000, idempotencyKey: "abc" },
}); */

//crea tarjetas de ese cliente
const body2 = {
  email: "my.user@example.com"
};

const e_mail = "my.user@example.com";

// Paso 3: Inicializar el objeto API
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

export const otra = "andres";

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
    const totoElUsu = new DatoCompleto(dato);
    parametros.unshift(totoElUsu);
      console.log(` array ${parametros.length}-¡Hola, ${dato}! \nMis Datos: ${JSON.stringify(parametros)}- `);
    // res.redirect("http://localhost:3000/verMensajes");
    res.send(` array ${parametros.length}-¡Hola, ${dato}! \nMis Datos: ${JSON.stringify(parametros)}- `);
    
    } catch (error) {
      console.log(error);
    }
}
export const verMensajes = async (req, res,next)=> {
  try {
    setTimeout(()=>{
      res.send(`Mensaje: -- ${parametros[0].hablar()}*****************)}`);
      console.log(`Mensaje: -- ${parametros[0].hablar()}*****************)}`);
    },3000) 
  } catch (error) {
    res.send(`mensaje de error`);
  }
}
const parametros =[];
class DatoCompleto
{
  datoCompleto={
  name:"",
  fecha:new Date(),
};
// types=Enum["compra","Vende"];

constructor(name){
  this.datoCompleto.name=name;
}

hablar=()=>{
  return (`HABLANDO▶️- ${this.datoCompleto.name} -- ${this.datoCompleto.fecha}` ) ;
}


/* enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
 */
}