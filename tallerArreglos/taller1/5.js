/* 5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
edad. */
function cinco() {
let usuarios=parseInt(prompt("Cuantos usuarios va a ingresar"));
let array=[]
let contador=0;
for (let index = 0; index < usuarios; index++) {
  let nombre=prompt("ingrese su nombre");
  let edad=prompt("ingrese su edad");

  if (edad>=18) {
    array.push(nombre,edad);
    contador++
  }
  

}
return console.log(contador,array);
}

cinco()