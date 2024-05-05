# pasarelaDePagos

* Pagos Online para integrar en multiples proyectos.
Aceptar pagos online en latinoamerica usando Nodejs y la pasarela de pago Mercadopago
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
morgan(ver peticiones) 
dotenv(no sube cofiguraciones)
* pnpm add rimraf nodemon(actualiza nav) --d

 * Se cambio "type": "module", en script package
 * por "type": "commonjs",
 por eso usaremos reuire en vez de impoort
 * y no usaremos exportar el modulo
  
# MercadoPago, integrada al proyetco