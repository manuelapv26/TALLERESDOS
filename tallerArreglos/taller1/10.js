/* 10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
introduzca el arreglo. */
function buscarLetraC() {
    let nombres = [];
    let cantidadNombres = parseInt(prompt("Ingrese la cantidad de nombres:"));
  
    // Pedir al usuario que ingrese los nombres
    for (let i = 0; i < cantidadNombres; i++) {
      let nombre = prompt("Ingrese el nombre #" + (i + 1) + ":");
      nombres.push(nombre);
    }
  
    let contador = 0;
  
    // Recorrer los nombres y contar las apariciones de la letra "c"
    for (let i = 0; i < nombres.length; i++) {
      let nombre = nombres[i];
  
      for (let j = 0; j < nombre.length; j++) {
        if (nombre[j].toLowerCase() === "c") {
          contador++;
        }
      }
    }
  
    // Mostrar el resultado
    if (contador > 0) {
      console.log("La letra 'c' se encuentra en los nombres ingresados.");
      console.log("Aparece", contador, "veces en total.");
    } else {
      console.log("La letra 'c' no se encuentra en los nombres ingresados.");
    }
  } 
  