/* 12. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las 
letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número 
de Timina (T). Se le debe pedir al usuario que introduzca los arreglos. */
function encontrarCadenaConMasTimina() {
    let cadenasADN = [];
    let cantidadCadenas = parseInt(prompt("Ingrese la cantidad de cadenas de ADN:"));
  
    // Pedir al usuario que ingrese las cadenas de ADN
    for (let i = 0; i < cantidadCadenas; i++) {
      let cadenaADN = prompt("Ingrese la cadena de ADN #" + (i + 1) + ":");
      cadenasADN.push(cadenaADN);
    }
  
    let cadenaMayorTimina = "";
    let maximoTimina = 0;
  
    // Encontrar la cadena con mayor número de Timina (T)
    for (let i = 0; i < cadenasADN.length; i++) {
      let cadenaADN = cadenasADN[i];
      let contadorTimina = 0;
  
      for (let j = 0; j < cadenaADN.length; j++) {
        if (cadenaADN[j] === "T") {
          contadorTimina++;
        }
      }
  
      if (contadorTimina > maximoTimina) {
        maximoTimina = contadorTimina;
        cadenaMayorTimina = cadenaADN;
      }
    }
  
    // Mostrar la cadena con mayor número de Timina (T)
    console.log("La cadena de ADN con mayor número de Timina (T) es:", cadenaMayorTimina);
  }