/* . Imprima el número de elementos de los siguientes arreglos usando la propiedad length
a) [1,2,3,4,5,6,7,8,9,10] b) [] c) ["a", true, -1] d) [2, 4, 5, 7, 1, 34, 89, 0]*/
function uno() {
    let arregloA=[1,2,3,4,5,6,7,8,9,10] 
    for (let index = 0; index < arregloA.length; index++) {
        console.log(arregloA[index])
    }
    let arregloB= ["a", true, -1]
    for (let index = 0; index < arregloB.length; index++) {
        console.log(arregloB[index])
        
    }
    let arregloC=[2, 4, 5, 7, 1, 34, 89, 0]
    for (let index = 0; index < arregloC.length; index++) {
        console.log(arregloC[index]);
    }
}
/* 2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo b) b) Agregue el
elemento true usando push y verifique el cambio en el arreglo
c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo d) Agregue los
elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo
e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en
el arreglo*/
function dos() {
    let arreglo=[1,2,3,4,5,6,7,8,9,10];
    arreglo.push(345);
    arreglo.push("ADSO");
    arreglo.push(455,78,false);
    arreglo.push("ABcd",true,21);
    console.log(arreglo);
}
/* 3. Use splice para hacer las eliminaciones correspondientes:
a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el
índice 4 en un sólo
llamado
e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en
un sólo
llamado*/
function tres() {
    let arregloA=[1, 2, false];
    arregloA.splice(2,1);
    console.log(arregloA)
    let arregloB=[99, false, 17, 45, 7, "abc", 78];
    arregloB.splice(6,1);
    console.log(arregloB);
    let arregloC=[-1, -55, -89- 30, 1000];
    arregloC.splice(1,1);
    console.log(arregloC);
    let arregloD=["zxc", 767, 1298, true, false, [3], 1];
    arregloD.splice(1,4);
    console.log(arregloD);
    let arregloE=[34, ["q"], 67, 1, 99, 1/2];
    arregloE.splice(3,2);
    console.log(arregloE);
}

/* 4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.
5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.*/
function dependiende() {
    let cadena= [2, 6, 9, 0, 5]
    let a= cadena.slice();
    console.log(a)
}
function independiente() {
    let cadena=["abc", 4, 88, 99];
    let b= cadena.concat();
    console.log(b);
}
/* 6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir
todos sus elementos*/
function seis() {
    let arreglo=["x", "y", "z", 0, 1, 2, 3];
    for (let index = 0; index < arreglo.length; index++) {
        console.log(arreglo[index])
    }
}

/* 7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e
imprimir todos sus elementos
aumentados en 1*/
function siete() {
    let arreglo=[1, 17, 8, 9, 3];
    for (let index = 0; index < arreglo.length; index++) {
        let aumento= arreglo[index]+1;
        console.log(aumento)
    }
}
/* 8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)*/
function ocho() {
      let arreglo = prompt("Ingresa los elementos del arreglo separados por comas:");
      let elementos = arreglo.split(",");
      let miArreglo = [];
      
      for (var i = 0; i < elementos.length; i++) {
        miArreglo.push(Number(elementos[i]));
        let longitud = (miArreglo);
        console.log("La longitud del arreglo es: " + longitud);  }
}

/* 9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún
elemento del siguiente arreglo
["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema  */
function nueve() {
    let letra=prompt("ingrese una letra del abecedario");
    let arreglo2=["a", "b", "c", "d", "e", "f", "g"];
    for (let index = 0; index < arreglo2.length; index++) {
        if (arreglo2[index]== letra) {
        }
        console.log("la letra si corresponde")
    }
}
nueve()