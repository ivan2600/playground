let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// CONTINUE evita todos los resultados que coincidan con la condicion, en este caso, los multiplos de 3.
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 3 == 0) {
//     continue;
//   }
//   console.log(numeros[i]);
  
// }


// BREAK omite todos los resultados a partir de la primer coincidencia. (hace un corte).
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 3 == 0) {
    break;
  }
  console.log(numeros[i]);
  
}