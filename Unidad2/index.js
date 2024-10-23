// let valor = 3;

// if(valor >0){
//     document.write("Es mayor a 0")
//     }else if{
//         document.write("es menor a 0")
//         }else{
//             document.write("Es igual a 0")

// }
/*
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");

 */



/////////////////BUCLES\\\\\\\\\\\\\\\\\\\\\\\\\

//FOR\\

// let nombre = prompt("dime un nombre");

// for(let i = 0; i < nombre.length; i++){

//   document.write(nombre[i]+"<br>")

// }

//do...while\\
// do
// {
//   document.write("hola jose")
// }  while(nombre  = jose);



///for of statement\\\

// const arr = [4, 5, 7];

// for (const i in arr) {
//     document.write(i + "<br>");
// }

// let persona;

// persona.nombre="Jesus";
// persona.apellido="Jimenez";

// for(let miembro of persona)
//   document.write(miembro);




function success(pos) {
  const crd = pos.coords;

  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.watchPosition(success, error);
