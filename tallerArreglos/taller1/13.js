/* 13. Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de
menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo. */
function ordenarArreglo() {
    let numeros = [];
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));
  
    // Pedir al usuario que ingrese los números
    for (let i = 0; i < cantidadNumeros; i++) {
      let numero = parseInt(prompt("Ingrese el número #" + (i + 1) + ":"));
      numeros.push(numero);
    }
  
    // Ordenar el arreglo de menor a mayor
    numeros.sort(function(a, b) {
      return a - b;
    });
  
    // Mostrar el arreglo ordenado
    console.log("El arreglo ordenado de menor a mayor es:", numeros);
  }
