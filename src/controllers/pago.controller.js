// Step 1: Importa las partes del módulo que deseas utilizar
import { MercadoPagoConfig, Payment } from "mercadopago";
import mercadopago from 'mercadopago';


const tokenVendedor = "TEST-3098823193955224-050414-3f1d98d54ca09994b2d6a7983b8fa15d-1467075401";
const tokenMio ="TEST-5417878203690460-050414-ad0526de3f85f3c3138e46265f8e402b-1349912905";

// paso 2: Initialize the client object
const client = new MercadoPagoConfig({
  /*token de integracion del usu vendedor Test prueba*/
  accessToken:  tokenVendedor,
  options: { timeout: 5000, idempotencyKey: "abc" },
});

// Paso 3: Inicializar el objeto API
const payment = new Payment(client);

// Step 4: Create the request object
const body = {
  transaction_amount: 2000,
  description: "<DESCRIPTION>",
  payment_method_id: "master",
  payer: {
    email: "esmuybellamybandera@gmail.com",
    id: "345"
  },
};

// Step 5: Create request options object - Optional
const requestOptions = {
  idempotencyKey: "<IDEMPOTENCY_KEY>",
};

const items = [];

// Step 6: Make the request object
export const creandoPago = payment
  .create({ body, requestOptions })
  .then(console.log())
  .catch(console.log);

export const otra = "andres";

export const crearOrden = async (req, res) => {
    /*mercadopago.configure({
    access_token:
      "TEST-3098823193955224-050414-3f1d98d54ca09994b2d6a7983b8fa15d-1467075401",
  });

  //crea orden de compra con los productos que quiero cobrar
  const result = await mercadopago.preferences.create({
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
  console.log(result);*/

  console.log("DANILO GAY");
  res.send("se crea la orden de compara DANILO"); 
  
};
