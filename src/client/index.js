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
    document.getElementById("btnOver").style.backgroundColor  = "blue";
 }
   
//  const btnOver = document.getElementById("btnOver").addEventListener("mouseleave",functionLeave());

 function functionLeave(){    
    document.getElementById("btnOver").innerText="Overr";
    document.getElementById("btnOver").style.backgroundColor  = "red";
 }
   
  function mostrar(){
    const datoTxto = document.getElementById("datoTxt");
    datoTxto.value="LLLA";
    alert(`Mostrtar: ${datoTxto.value}`);
  }

  const element = document.getElementById("id01");
element.innerHTML = "New Heading";

  let divsito = document.getElementById("contenido")
divsito.innerHTML = misObjetos

/* let divsito = document.getElementById("contenido")
divsito.innerHTML = JSON.stringify(misObjetos) */


// JSON.stringify(result) to convert the JS Object into a JSON string.
console.log(typeof misObjetos) //object
console.log(typeof JSON.stringify(misObjetos)) //string

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