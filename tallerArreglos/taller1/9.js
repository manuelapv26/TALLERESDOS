/* 9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos. */
function compararPromedioArreglos() {
    let arreglo1 = [];
    let arreglo2 = [];
  
    let cantidadNumeros1 = parseInt(prompt("Ingrese la cantidad de números en el primer arreglo:"));
  
    // Pedir al usuario que ingrese los números del primer arreglo
    for (let i = 0; i < cantidadNumeros1; i++) {
      let numero = parseInt(prompt("Ingrese el número #" + (i + 1) + " del primer arreglo:"));
      arreglo1.push(numero);
    }
  
    let cantidadNumeros2 = parseInt(prompt("Ingrese la cantidad de números en el segundo arreglo:"));
  
    // Pedir al usuario que ingrese los números del segundo arreglo
    for (let i = 0; i < cantidadNumeros2; i++) {
      let numero = parseInt(prompt("Ingrese el número #" + (i + 1) + " del segundo arreglo:"));
      arreglo2.push(numero);
    }
  
    // Calcular el promedio de cada arreglo
    let promedio1 = calcularPromedio(arreglo1);
    let promedio2 = calcularPromedio(arreglo2);
  
    // Comparar los promedios y mostrar el resultado
    if (promedio1 > promedio2) {
      console.log("El primer arreglo tiene un promedio mayor:", promedio1);
    } else if (promedio2 > promedio1) {
      console.log("El segundo arreglo tiene un promedio mayor:", promedio2);
    } else {
      console.log("Ambos arreglos tienen el mismo promedio:", promedio1);
    }
  }
  
  function calcularPromedio(arreglo) {
    let suma = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
  
    return suma / arreglo.length;
  }
  
  compararPromedioArreglos();