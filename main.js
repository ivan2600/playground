const boton = document.querySelector('.boton');
const botonNro = document.querySelectorAll('.boton');
const body = document.querySelector('body');

let contador = 0
boton.addEventListener('click', ()=>{
  contador++;
  console.log(contador);
  const newButton = document.createElement('button');
  newButton.setAttribute('class', 'boton');
  newButton.innerText = "BOTÓN";

  body.appendChild(newButton);
})