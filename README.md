# pasarelaDePagos

* Pagos Online para integrar en multiples proyectos.
* Aceptar pagos online en latinoamerica usando Nodejs y la pasarela de pago Mercadopago
Crearemos una REST API con Nodejs y Express.
 
Fazt Code: https://www.youtube.com/watch?v=MIWz7tXOxNg
quedo en es
 FaztCode (https://www.youtube.com/watch?v=QqiDandkcBY) 

* Pagos Online de los 3 procesadores o pasarelas de pago como lo son Stripe, Paypal y Mercado Pago, usándolos en conjunto en una aplicación de Nextjs.
* Pagos Online en apps webs, para cualquier proyecto. 
* Creada con NextJs.
* Recibir pagos de forma global, la integracion con esas pasrelas, procesar estos pagos, registrar, relacionarlo con el usuario, enviar comprobante de pago, seguridad y produccion.
Cómo recibir pago único o pagos recurrentre al mismo usuario.
* Relacionar con BD y Roles de Usu.

# Arranca sasí
    * pnpm init -y
    * pnpm add  express 
    * morgan(ver peticiones) 
    * dotenv(no sube cofiguraciones)
    * pnpm add rimraf nodemon(actualiza nav) --d

    * Se cambio "type": "module", en script package
    * por "type": "commonjs",
    por eso usaremos require en vez de import
    * y no usaremos exportar el modulo
 
# MercadoPago, integrada al proyetco
* Logueados en mercado pago> en MPDevelopers creamos una App y obtendremos credenciales de prueba
* con estos usus nos logueamos de nuevo como comprador (cliente) y vendedor (Nosotros)
* con uno de los usuarios de Test le hago una app para vender en MPDevelopers
* Con este usu obtengo la Public Key  y token para usar y comunicarme con esta app y conectarme desde codigo
* ahora usare MP API con estas credenciales de prueba. Veremos en npm mercadopago 
   
# Mercado Pago SDK for NodeJS
* https://www.npmjs.com/package/mercadopago 
* npm install --save mercadopago
* // Step 1: Import the parts of the module you want to use
    import { MercadoPagoConfig, Payment } from 'mercadopago';
* // Step 2: Initialize the client object
    const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000, idempotencyKey: 'abc' } });
* // Step 3: Initialize the API object
    const payment = new Payment(client);
* // Step 5: Create request options object - Optional
    const requestOptions = {idempotencyKey: '<IDEMPOTENCY_KEY>',};
* // Step 6: Make the request
    payment.create({ body, requestOptions }).then(console.log).catch(console.log);
    