/* 1. Dado el siguiente arreglo let j = [200, -100, 45, 78, 32] , imprimir los elementos de indice 2 y 4*/
function j() {
let j = [200, -100, 45, 78, 32]
console.log(j[2]);
console.log(j[4])
}


/* 2. Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] , imprimir los elementos cd y gh. */
function f() {
let f = ["ab", "cd", "ef", "gh"]
console.log(f[1]);
console.log(f[3])
}


/* 3. Dado el siguiente arreglo let aux = [10, true, "k200", 20.7] , imprimir todos sus elementos usando la
operacion de recorrido con foreach*/
function aux() {
let aux = [10, true, "k200", 20.7]
aux.forEach(Element=> {
console.log(Element)
});
}


/* 4. Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con foreach e
imprimir los elementos que sean números impares*/
function k() {
let k = [17, 4, 64, 79, 109, 112]
k.forEach(element => {
if (element %2 !== 0) {
console.log(element)
}
});
}

/* 5. Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de índice 2 por
true, cambiar el elemento de índice 3 por false. */
function h() {
let h = [true, true, false,true, false]
h[2]=true
console.log(h[2])
h[3]=false
console.log(h[3])
}

/* 6. Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento "jp" por true, cambiar
el elemento "qr" por 30*/
function w() {
let w = ["wc", "jp", "zx", "qr"]
w[1]=true
console.log(w[1])
w[3]=30
console.log(w[3])
}


/* 7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra,
imprimiendo cada uno de sus elementos.*/
function arreglo() {
let arreglo =[2, 5, 7, 9] 
for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index])
}
}
/* 8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del
arreglo.*/
function contarElementosUsuario() {
    let arreglo = [];
    
    // Solicitar al usuario que ingrese los elementos del arreglo
    let numElementos = parseInt(prompt("Ingresa el número de elementos del arreglo:"));
    
    for (let i = 0; i < numElementos; i++) {
      let elemento = parseInt(prompt("Ingresa el elemento" + (i + 1) + ":"));
      arreglo.push(elemento);
    }
    
    return arreglo.length;
      // Llamar a la función
  let cantidadElementos = contarElementosUsuario();
  console.log("El arreglo tiene " + cantidadElementos + " elementos.");
  }
  
/* 9. Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo [30, 44, 54, 89, 100]  */
let miArreglo =[30, 44, 54, 89, 100];
let indice = miArreglo.indexOf(44);
console.log(indice);

let arregloPordos=[30, 44, 54, 89, 100];
let indice2= arregloPordos.indexOf(89);
console.log(indice2);

let arregloPortres=[30, 44, 54, 89, 100];
let indice3= arregloPortres.indexOf(70);
console.log(indice3)