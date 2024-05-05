// Step 1: Importa las partes del módulo que deseas utilizar
import { MercadoPagoConfig, Payment } from "mercadopago";
import mercadopago from 'mercadopago';

// paso 2: Initialize the client object
const client = new MercadoPagoConfig({
  /*token de integracion del usu vendedor Test prueba*/
  accessToken:
    "TEST-3098823193955224-050414-3f1d98d54ca09994b2d6a7983b8fa15d-1467075401",
  options: { timeout: 5000, idempotencyKey: "abc" },
});

// Paso 3: Inicializar el objeto API
const payment = new Payment(client);

// Step 4: Create the request object
const body = {
  transaction_amount: 2000,
  description: "<DESCRIPTION>",
  payment_method_id: "<PAYMENT_METHOD_ID>",
  payer: {
    email: "<EMAIL>",
  },
};

// Step 5: Create request options object - Optional
const requestOptions = {
  idempotencyKey: "<IDEMPOTENCY_KEY>",
};

// Step 6: Make the request
export const creandoPago = payment
  .create({ body, requestOptions })
  .then(console.log)
  .catch(console.log);

export const otra = "andres";

export const crearOrden = async (req, res) => {
  /* mercadopago.configure({
    access_token:
      "TEST-3098823193955224-050414-3f1d98d54ca09994b2d6a7983b8fa15d-1467075401",
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "laptop",
        unit_price: 500,
        currency_id: "PES",
        quamtity: 1,
      },
    ],
  }); 
  console.log(result);*/

  res.send("se crea la orden");
};
