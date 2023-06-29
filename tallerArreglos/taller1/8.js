/* 8. Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
debe pedir al usuario que introduzca el arreglo.  */
function encontrarNumeroMayor() {
    let arreglo = [];
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en el arreglo:"));
  
    // Pedir al usuario que ingrese los números del arreglo
    for (let i = 0; i < cantidadNumeros; i++) {
      let numero = parseInt(prompt("Ingrese el número #" ,(i + 1) , ":"));
      arreglo.push(numero);
    }
  
    let numeroMayor = arreglo[0];
  
    // Encontrar el número mayor en el arreglo
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > numeroMayor) {
        numeroMayor = arreglo[i];
      }
    }
  
    return numeroMayor;
  }
let mayor = encontrarNumeroMayor();
console.log("El número mayor es:", mayor); 
  