/* 14. Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.Se le debe pedir al usuario que introduzca el arreglo. */
function ordenarArreglo() {
    let letras = [];
    let cantidadLetras = parseInt(prompt("Ingrese la cantidad de letras:"));
  
    // Pedir al usuario que ingrese las letras
    for (let i = 0; i < cantidadLetras; i++) {
      let letra = prompt("Ingrese la letra #" + (i + 1) + ":");
      letras.push(letra);
    }
  
    // Ordenar el arreglo alfabéticamente
    letras.sort();
  
    // Mostrar el arreglo ordenado
    console.log("El arreglo ordenado alfabéticamente es:", letras);
  }
  
  ordenarArreglo(); 
  