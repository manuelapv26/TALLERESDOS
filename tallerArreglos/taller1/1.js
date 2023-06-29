/* 1. Dado el arreglo [1,2,3,4,5,6]:
a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla. */
function a() {
let arreglo = [1, 2, 3, 4, 5, 6];
let i = 0;

while (i < arreglo.length) {
  console.log(arreglo[i]);
  i++;
}
}
/* b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla. */
function b() {
let arreglo = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}
}
/* c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1. */
function c() {
let arreglo = [1, 2, 3, 4, 5, 6];
let copiaArreglo = [];

for (let i = 0; i < arreglo.length; i++) {
  copiaArreglo.push(arreglo[i] + 1);
}

console.log(copiaArreglo);

}
/* d) Calcular el promedio de todos los elementos del arreglo */
function d() {
let arreglo = [1, 2, 3, 4, 5, 6];
let suma = 0;

for (let i = 0; i < arreglo.length; i++) {
  suma += arreglo[i];
}

let promedio = suma / arreglo.length;
console.log("El promedio es: " + promedio);

}
