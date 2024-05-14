let counter = 1;
let header = document.getElementById("head");
let element = document.getElementById("nro1");
let texto = document.getElementById("btn");
element.innerHTML = `Nro de clics ${counter}`;

function e() {
  counter = counter + 1;
  element.innerHTML = `Nro de clics ${counter}`;
  header.innerHTML = `<b>Jodiendo con el Js DOM</b>`;
  //cambio el texto del boton
  if (texto.innerHTML === "Seguir") {
    texto.classList.add("active")
    texto.textContent = "Siguiendo";
  } else {
    texto.innerHTML = "Seguir";
    header.innerHTML = `<b>Jodiendo con el Js DOM - Seguir la vaina</b>`;
    texto.classList.remove("active", "hover")
    //texto.classList.remove("hover")
  }
  element.classList.toggle("btn");
  console.log(texto.textContent, counter);
}

function remove() {
  let txtbtn = document.getElementById("btn");

  if (txtbtn.innerHTML === "Siguiendo") {
       texto.innerHTML = "Dejar de seguir";
    txtbtn.classList.add("hover");

  } else if (txtbtn.innerHTML === "Dejar de seguir") {
    txtbtn.classList.remove("hover");
    texto.innerHTML = "Siguiendo";
  }
}

function siguiendo() {
  let txttn = document.getElementById("btn");
  if (txttn.innerHTML === "Dejar de seguir") {
    texto.innerHTML = "Siguiendo";
    txttn.classList.remove("hover");
    
  }
}

let countercart = document.getElementById("target")
let suma = document.getElementById('sumar')

let cant = 1

countercart.innerText = cant
let mensaje = document.getElementById('mesg')
function restar(){
  if ( cant > 1) {
    cant = cant - 1
    countercart.innerText = cant
   mensajeF() 
  }
}

function sumar(){
  if ( cant >= 0 && cant < 9) {
    cant = 1 + cant
    countercart.innerText = cant
    mensajeF()    

  }
  
  }

  function mensajeF(){
    let names = document.getElementById('nombre').value
    if ( cant > 0 && cant < 9 ){
      mensaje.style.display="block"
      mensaje.innerHTML = names + `, el máximo 9 unidades`
      suma.innerText = "add"
      suma.style.backgroundColor = ""
      mensaje.style.color = "gray"
     }
     else{
      mensaje.style.display="block"
      suma.innerText = "cancel"
      suma.style.backgroundColor = "gray"
      mensaje.style.color = "red"    
      mensaje.innerText = names + `, no puede solicitar más unidades`
     }
  }
