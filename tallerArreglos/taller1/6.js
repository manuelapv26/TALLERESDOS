/* 6.Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
    “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
    queden en el arreglo que les corresponde. Use ciclos. */
let valle=["Cali" ,"Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba","Armenia","Palmira", "Circasia"];
let valleNuevo=[...valle];
let quindioNuevo=[...quindio]


quindioNuevo.splice(2,1);
quindioNuevo.push("salento")
valleNuevo.splice(3,1)
valleNuevo.push("palmira")

console.log("VALLE");

valleNuevo.forEach( p => {
  console.log(p);
});

console.log("QUINDIO");

quindioNuevo.forEach(ñ => {
  console.log(ñ);
});