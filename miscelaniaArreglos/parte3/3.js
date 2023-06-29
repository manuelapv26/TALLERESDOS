/* Dado el arreglo [3, 50, 70, 600, 40]:
1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos*/
function uno() {
    let arreglo = [3, 50, 70, 600, 40];
    arreglo.forEach(function(elemento) {
      console.log(elemento);
    });
}
  
/* 2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3*/
function dos() {
    let arreglo = [3, 50, 70, 600, 40];

    arreglo.forEach(function(elemento) {
    let resultado = elemento * 3;
  console.log(resultado);
});

}
/* 3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos*/
function tres() {
let arreglo = [3, 50, 70, 600, 40];
let indice = 0;
while (indice < arreglo.length) {
  console.log(arreglo[indice]);
  indice++;
}
}

/* 4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos
son pares */
function cuatro() {
let arreglo = [3, 50, 70, 600, 40];

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] % 2 === 0) {
    console.log(arreglo[i]);
  }
}
}

/* 5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para
mostrar si el nombre Juan se encuentra dentro del arreglo */
function cinco() {
let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
let encontrado = false;

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] === "Juan") {
    encontrado = true;
    break;
  }
}

if (encontrado) {
  console.log("El nombre Juan se encuentra en el arreglo.");
} else {
  console.log("El nombre Juan no se encuentra en el arreglo.");
}

}

/* 6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,
y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria
en el arreglo) para mostrar cuántas veces aparece el nombre Maria */
function seis() {
    let arreglo=["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
    let contador= 1;
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index]==="Maria") {
            contador++;
            break;
        }
    }
    console.log("las veces que se encontró a Maria fue",contador) 
}
/* 7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de
sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como
se implementa la variable contadora*/
function siete() {
let arreglo = [15, 7, 9, 12, 1];
let suma = 0;
arreglo.forEach(function(elemento) {
  suma += elemento;
});

console.log("La suma de los elementos es: " + suma);

}

/* 8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de
los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de
arreglos para ver cómo se implementa la variable contadora  */
function ocho() {
    let arreglo = [-2, 8, 99, 1, 7];
    let suma = 0;
    arreglo.forEach(function(elemento) {
      suma += elemento;
    });
    
    console.log("La suma de los elementos es: " + suma);
    
    }
/* 9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable
contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo.
Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa
la variable contadora. */
function nueve() {
    let arreglo=[true, true, false, true, false, false];
    let contador= 0;
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index]==="false") {
            contador++;
        }
    }
    console.log("las veces que se encontró a false fue",contador) 
}
nueve()

/* 10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para
inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la
palabra adso.  */
function diez() {
let arreglo = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let palabra = "adso";
let esPosibleFormar = true;

for (let i = 0; i < palabra.length; i++) {
  if (!arreglo.includes(palabra[i])) {
    esPosibleFormar = false;
    break;
  }
}

if (esPosibleFormar) {
  console.log("Es posible formar la palabra 'adso' con los elementos del arreglo.");
} else {
  console.log("No es posible formar la palabra 'adso' con los elementos del arreglo.");
}

}

/* 11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for para mostrar la tabla del 5 del
10 al 20 , p.e (5x10, 5x11...) */
function once() {
let arreglo = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < arreglo.length; i++) {
  var resultado = 5 * arreglo[i];
  console.log("5 x " + arreglo[i] + " = " + resultado);
}

}

/* 12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro) para determinar
cuales numeros con consecutivos con otros, p.e. dos a y b son
consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos
porque 20 + 1 = 21. */ 
function doce() {
    let arreglo = [5, 7, 90, 2, 5, 3, 8, 99];

arreglo.forEach(function(a) {
  arreglo.forEach(function(b) {
    if (a + 1 === b) {
      console.log(a + " y " + b + " son consecutivos.");
    }
  });
});

    
}