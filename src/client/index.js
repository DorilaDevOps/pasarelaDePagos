// import{clock} from '../server/Utils/fecha.js';
import * as toodo from '../server/Utils/fecha';

let misObjetos = {
    valor1: "valor1",
    valor2: "valor2",
    valor3: "valor3"
  }
  

  const btnMostrar = document.getElementById("btnMostrar");
//   btnMostrar.addEventListener("click", () =>{alert(`Mostrtar: `);});
// document.getElementById("btnMostrar").addEventListener("click", function(){ alert("Hello World!"); });
//document.getElementById("btnOver").addEventListener("mousemove", function(){ alert("HOLAAA"); });
 function functionOver(){    
    document.getElementById("btnOver").innerText="Paso...";
    // document.getElementById("btnOver").style.backgroundColor  = "blue";
    document.getElementById("btnOver").classList.remove("cambiaRelleno");
    document.getElementById("btnOver").classList.add("otherclass");
 }
   
//  const btnOver = document.getElementById("btnOver").addEventListener("mouseleave",functionLeave());

 function functionLeave(){    
     document.getElementById("btnOver").innerText="Overr";
    document.getElementById("btnOver").classList.add("cambiaRelleno");
    // document.getElementById("btnOver").className+="otherclass";
 }
   
 document.getElementById("btnAlgo").onclick = displayDate;
 function displayDate(){
  alert("ALGOOGLE");
 }

  function mostrar(){
    const datoTxto = document.getElementById("datoTxt");
    datoTxto.value="LLLA";
    alert(`Mostrtar: ${datoTxto.value}`);
  }

  function clocku(){/* 
    let ttoo = toodo.clock();
    console.log(ttoo);
     const letClock = clock;  */
    console.log("EEEEEEEE");
    alert("EEEEEEEE");
  }

/***
 * ESTOS elementos de abajo seran nulls, 
 * se debe insertar el elemento en el árbol del documento con
 *  Node.insertBefore() o un método similar antes de poder acceder a él con getElementById():
 *
 * const element = document.getElementById("id01");
element.innerHTML = "New Heading"; 

  let divsito = document.getElementById("contenido")
divsito.innerHTML = misObjetos
*
* let divsito = document.getElementById("contenido")
divsito.innerHTML = JSON.stringify(misObjetos) 


* JSON.stringify(result) to convert the JS Object into a JSON string.
console.log(typeof misObjetos) //object
console.log(typeof JSON.stringify(misObjetos)) //strin
*/

function displayResult() {
    let url = window.document.URL;
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
    const btnMostrar = document.getElementById("btnMostrar");
    alert(`Mostrtar: ${btnMostrar}-- URL ${url} - ${Date()}`);
    document.getElementById("myImage").src = "./img/rr jpg.jpg";
    btnMostrar.innerText="IIMPECA";
    
   const datoTxto = document.getElementById("datoTxt");
   datoTxto.value="LLLA";
  }