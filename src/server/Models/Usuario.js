class Usuario
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

export default Usuario;