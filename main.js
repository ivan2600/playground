const botonInicial = document.querySelector('.boton-i');
const container = document.querySelector('.container');
const cuenta = document.querySelector('.cuenta');
const botonNPC = document.querySelectorAll('.boton')
let contador = 0


cuenta.addEventListener('click', ()=>{
  const botonNro = document.querySelectorAll('.boton');
  botonNro.forEach( ( cadaBoton , i )=>{
    console.log('lalala');
  })
  console.log(botonNro)
})





botonInicial.addEventListener('click', ()=>{
  contador++;
  console.log(contador);
  const newButton = document.createElement(`button`);
  newButton.setAttribute('class', 'boton');
  newButton.setAttribute('id', `boton-${contador}` )
  newButton.innerText = "Boton agregado";

  container.appendChild(newButton);
})


  
container.addEventListener('click', function(event) {
  // Verificar si el clic ocurrió en un elemento con la clase 'boton'
  if (event.target.classList.contains('boton')) {
  
    // Realizar acciones específicas para los botones
    console.log('Clickeaste un botón:', event.target.id);
    // Ejecutar funciones relevantes para los botones
  }
});