/* 7.Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
    “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
    verduras) queden en el arreglo que les corresponde. Use ciclos. */
let arreglo1=["Pera" ,"Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana","Banano","Lechuga", "Perejil"];
let arreglo1Nuevo=[...arreglo1];
let arreglo2Nuevo=[...arreglo2];


arreglo1Nuevo.splice(0,1);
arreglo1Nuevo.splice(2,1)
arreglo1Nuevo.push("Lechuga","Perejil")
arreglo2Nuevo.splice(2,1)
arreglo2Nuevo.splice(3,1)
arreglo2Nuevo.push("Pera","Limón")

console.log("arreglo1");

arreglo1Nuevo.forEach( p => {
  console.log(p);
});

console.log("arreglo2");

arreglo2Nuevo.forEach(ñ => {
  console.log(ñ);
});