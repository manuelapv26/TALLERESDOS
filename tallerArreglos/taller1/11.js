/* 11. Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo. */
function contarNumerosImpares() {
    let numeros = [];
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));
  
    // Pedir al usuario que ingrese los números
    for (let i = 0; i < cantidadNumeros; i++) {
      let numero = parseInt(prompt("Ingrese el número #" + (i + 1) + ":"));
      numeros.push(numero);
    }
  
    let contadorImpares = 0;
  
    // Contar los números impares
    for (let i = 0; i < numeros.length; i++) {
      let numero = numeros[i];
  
      if (numero % 2 !== 0) {
        contadorImpares++;
      }
    }
  
    // Mostrar el resultado
    console.log("El arreglo contiene", contadorImpares, "números impares.");
  } 
  