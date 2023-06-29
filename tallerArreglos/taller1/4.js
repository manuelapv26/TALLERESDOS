/* 4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
él. */
function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function mostrarNumerosPrimos(arreglo) {
    console.log("Números primos:");
  
    for (let i = 0; i < arreglo.length; i++) {
      let numero = arreglo[i];
  
      if (esPrimo(numero)) {
        console.log(numero);
      }
    }
  }
  
  let arregloNumero = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  mostrarNumerosPrimos(arregloNumero);
  