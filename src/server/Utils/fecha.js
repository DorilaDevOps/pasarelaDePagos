export const fechaHoy = () => {
  const fecha1 = Date.now();
//   console.log(`Hoy es - ${fechaHoy}`);
  return fecha1;
};

export const otraFecha = () => {
  const fecha2 = new Date();  /* Tue May 14 2024 10:20:05 GMT-0300 (hora estándar de Uruguay) */
  /* ===es equvalente a ----= 
  var d3 = new Date().getTime(); */

//   console.log(`Otra fecha es -- ${fecha2}`);
  return fecha2;
};

export const clock = ()=>{

    const fechalocal = document.getElementById("rango");
    const tiempoLocal = document.querySelector(".pVerReloj");
    let f = new Date();
    let month=f.getMonth()+1,
     dia = f.getDay(),
     anio = f.getFullYear(),
     minutes = f.getMinutes(),
     seconds = f.getSeconds(),
     hours = f.getHours(),

     fecha = Date.now();

     let timeString = f.toLocaleDateString(); //fecha comun
     tiempoLocal.innerHTML = timeString;
    alert(`HORA-- ${fecha}` + fecha);
    console.log(fecha);
    console.log("Mierda fecha");
    
}

export default(clock,otraFecha);