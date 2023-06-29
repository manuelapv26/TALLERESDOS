/* 2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo. */
let arreglo= ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"]
let acumulador="";
for (let index = 0; index < arreglo.length; index++) {

    for (let i = 0; i < arreglo[index].length; i++) {
        if (arreglo[index][i].includes("A")) {
            acumulador=acumulador+"A";
        }
    }
}
console.log(acumulador);