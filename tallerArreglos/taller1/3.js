/* . Cree una función que reciba un arreglo de números enteros y retorne el número menor en él. Se le
debe pedir al usuario que introduzca el arreglo. */
function tres(arreglo) {
  
  let menor = arreglo[0]; 
  
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] < menor) {
        menor = arreglo[i]; 
      }
    }
  
    return menor;
  }
  
  // Pedir al usuario que introduzca el arreglo
  let entrada1 = prompt("Introduce los números separados por coma:");
  let numeros = entrada1.split(",").map(Number);
  
  
  // Llamar a la función y mostrar el resultado
  let menor = encontrarNumeroMayor(numeros);
  console.log("El número mayor es:", menor);