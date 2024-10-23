//CONDICIONALES crl/k/c o u
//1._

// let numero = parseInt(prompt("Introduce un número:"));

// if (numero % 2 === 0) {
//     document.write("El número es par.");
// } else {
//     document.write("El número es impar.");
// }



//2._

// let edad = parseInt(prompt("Edad:"));

// if (edad >= 18) {
//     document.write("Es mayor de edad.");
// } else {
//     document.write("Es menor de edad.");
// }

//3._

// let edadUsuario = parseInt(prompt("Introduce tu edad:"));
// let ciudad = prompt("Localidad de nacimiento:");

// if (edadUsuario > 25 && ciudad === "madrid") {
//     document.write("Enhorabuena");
// }

//4._

// let numeroDescuento = parseInt(prompt("Introduce un número:"));

// if (numeroDescuento > 100) {
//     let nuevoNumero = numeroDescuento * 0.85;
//     document.write(("Con descuento aplicado es: ") + nuevoNumero);
// } else {
//     document.write("no hay descuento.");
// }

//5._

// let nombre = prompt("Introduce tu nombre:");

// if (nombre === "Pablo" || nombre === "Eduardo") {
//     document.write("Bienvenido");
// } else if (nombre === "Ana" || nombre === "Clara") {
//     document.write("Bienvenida");
// } else {
//     document.write("No valido");
// }



//6._

// let ciudadUsuario = prompt("¿Dónde vives?");
// let edadVivienda = parseInt(prompt("Introduce tu edad:"));

// if (ciudadUsuario.toLowerCase() === "madrid" && edadVivienda >= 18 && edadVivienda <= 30) {
//     document.write("Puedes acceder al carnet de empresarios emprendedores.");
// } else {
//     document.write("No puedes acceder");
// }

//o	IF / ELSE

//1._   ¡¡¡DUDA!!!

// let nombre = prompt("Introduce tu nombre:");
// let apellidos = prompt("Introduce tus apellidos:");

// if (nombre = "Ricardo") {
//     document.write(apellidos); 
//     } else {
//         document.write("No valido");
// }


//2._

// let edad = parseInt(prompt("Introduce tu edad:"));

// if (edad >= 67) {
//     document.write("Puedes jubilarte.");
// } else {
//     document.write("No puedes jubilarte.");
// }


//3._

// let edad = parseInt(prompt("Introduce tu edad:"));

// if (edad <= 5) {
//     document.write("Debes estar en el jardín de infancia.");
// } else if (edad >= 6 && edad <= 11) {
//     document.write("Debes estar en primaria.");
// } else if (edad >= 12 && edad <= 16) {
//     document.write("Debes estar en la ESO.");
// } else if (edad >= 17 && edad <= 21) {
//     document.write("Debes estar en Bachillerato o Ciclos.");
// } else if (edad > 21) {
//     document.write("Debes estar en la universidad.");
// } else {
//     document.write("Edad no válida.");
// }


//4._

// let numeroHermanos = parseInt(prompt("¿Cuántos hermanos tienes?"));
// let cantidad = parseInt(prompt("Introduce una cantidad:"));

// if (numeroHermanos >= 3) {
//     let descuento = cantidad * 0.85;
//     document.write(("Con un 15% de descuento es: ") + descuento);
// } else if (numeroHermanos > 0 && numeroHermanos <= 3) {
//     let descuento = cantidad * 0.95;
//     document.write(("Con un 5% de descuento es: ") + descuento);
// } else if (numeroHermanos === 0) {
//     document.write(("Sin descuento es: ") + cantidad);
// }


//5._

// let examen1 = parseInt(prompt("nota del primer examen:"));
// let examen2 = parseInt(prompt("nota del segundo examen:"));
// let trabajo1 = parseInt(prompt("nota del primer trabajo:"));
// let trabajo2 = parseInt(prompt("nota del segundo trabajo:"));

// let mediaE = (examen1 + examen2) / 2;
// let mediaT = (trabajo1 + trabajo2) / 2;

// let notaFinal = (mediaE * 0.75) + (mediaT * 0.25);

// if (notaFinal >= 5 && examen1 >= 4.5 && examen2 >= 4.5 && trabajo1 >= 4.5 && trabajo2 >= 4.5) {
//     document.write("Has aprobado la asignatura.");
//     document.write(("Aprobado con un ") + notaFinal );

// } else {
//     document.write("No has aprobado la asignatura.");
// }

// SWITCH
    //podemos utilizar un default para control de errores
    //si no se cumple ninguna de las condiciones, se ejecuta el default

//1._

// let mes = prompt("Introduce un mes:").toLowerCase();

// switch (mes) {
//     case "enero":
//     case "marzo":
//     case "mayo":
//     case "julio":
//     case "agosto":
//     case "octubre":
//     case "diciembre":
//         document.write(mes + " tiene 31 días.");
//         break;
//     case "abril":
//     case "junio":
//     case "septiembre":
//     case "noviembre":
//         document.write(mes + " tiene 30 días.");
//         break;
//     case 'febrero':
//         document.write("febrero tiene 28 o 29");
//         break;
//    }

//2._

// let numero = parseInt(prompt("Introduce un número:"));

// switch (true) {
//     case (numero % 2 === 0):
//         document.write("El número es par.<br>");
//         break;
//     default:
//         document.write("El número no es par.<br>");
// }

// switch (true) {
//     case (numero % 3 === 0):
//         document.write("El número es múltiplo de 3.<br>");
//         break;
//     default:
//         document.write("El número no es múltiplo de 3.<br>");
// }

// switch (true) {
//     case (numero % 5 === 0):
//         document.write("El número es múltiplo de 5.<br>");
//         break;
//     default:
//         document.write("El número no es múltiplo de 5.");
// }

//3

// let numero1 = parseInt(prompt("Introduce el primer número:"));
// let numero2 = parseInt(prompt("Introduce el segundo número:"));
// let operacion = prompt("Introduce la operación (+, -, *, /):");

// switch (operacion) {
//     case '+':
//         document.write("la suma es: " + (numero1 + numero2));
//         break;
//     case '-':
//         document.write("la resta es: " + (numero1 - numero2));
//         break;
//     case '*':
//         document.write("la multiplicación es: " + (numero1 * numero2));
//         break;
//     case '/':
//         if (numero2 !== 0) {
//             document.write("la división es: " + (numero1 / numero2));
//         } else {
//             document.write("No se puede dividir entre 0.");
//         }
//         break;
//     default:
//         document.write(null);
//         break;
// }






/////////BUCLES\\\\\\\\\\\

//1._

// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<hr>");
//   }

//   //2

//   let numero = parseInt(prompt("Introduce un número:"));
// for (let i = numero; i <= 100; i++) {
//   document.write(i + "<br>");
// }

// //3


// let numero;
// while (true) {
//   numero = parseInt(prompt("Introduce un número (0 para salir):"));
//   if (numero === 0) {
//     break;
//   }
//   document.write(numero + "<br>");
// }

// //4

// let palabra;
// while (true) {
//   palabra = prompt("Introduce una palabra (SALIR para salir):");
//   if (palabra.toUpperCase() === "SALIR") {
//     break;
//   }
//   console.log(palabra + "<br>");
// }



//5


// let suma = 0;

// for (let i = 1; i <= 10; i++) {
//     let numero = parseInt(prompt(`Introduce el número: ` + i ));
//     suma += numero;
// }

// document.write(`La suma de los 10 números es: ` + suma);

//6

// let numero = parseInt(prompt("Introduce un numero para ver su tabla de multiplicar:"));

// for (let i = 1; i <= 10; i++) {
//     document.write(numero + "x"+ i + "=" + numero * i + "<br>");
// }

//7

// let numeroSecreto = parseInt(prompt("Jugador 1, introduce un número secreto:"));
// let adivinado = false;

// while (!adivinado) {
//     let intento = parseInt(prompt("Jugador 2, adivina el número secreto:"));
    
//     if (intento === numeroSecreto) {
//         alert("¡Felicidades!");
//         adivinado = true;
//     } else if (intento < numeroSecreto) {
//         alert("El número secreto es mayor que " + intento);
//     } else {
//         alert("El número secreto es menor que " + intento);
//     }
// }


