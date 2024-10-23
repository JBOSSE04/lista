// 1.-Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

// let n1 = parseInt(prompt("Ingrese un número para el :"));
// for (let i = 1; i <= n1; i++) {
//   document.write(i);
// }

// 2.-Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.


// let n2 = parseInt(prompt("Ingrese un número para el :"));
// for (let i = 1; i <= n2; i += 2) {
//   document.write(i);
// }

// 3.-Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.

// let n3 = parseInt(prompt("Ingrese un número para el:"));
// for (let i = n3; i >= 1; i--) {
//   document.write(i);
// }


// 4.-Escribir utilizando console.log la tabla del 9 hasta 9x10.

// for (let i = 1; i <= 10; i++) {
//   document.write(`9 x ${i} = ${9 * i}`);
// }


// 5.-Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.


// let numero = prompt("Ingresa un número:");

// if (isNaN(numero) || numero.includes(" ")) {
//     document.write("Por favor, ingresa solo números.");
// } else {
//     let suma = 0;
//     for (let i = 0; i < numero.length; i++) {
//         suma += parseInt(numero[i]);
//     }

//     document.write(`La suma de los dígitos es: ${suma}`);
// }



// 6.-Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

// let n6 = parseInt(prompt("Ingrese el primer número :"));
// let m6 = parseInt(prompt("Ingrese el segundo número:"));
// let suma6 = 0;
// for (let i = Math.min(n6, m6); i <= Math.max(n6, m6); i++) {
//   if (i % 2 === 0) {
//     suma6 += i;
//   }
// }
// document.write("La suma de los números pares es:", suma6);


// 7.-Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.

// let n = parseInt(prompt("Ingrese un número:"));
// let suma = 0;
// for (let i = 1; i <= n; i++) {
//   suma += i;
// }
// document.write("La sumatoria es:", suma);


// 8.-Realizar el factorial de los primeros N números.

let n = parseInt(prompt("Ingrese un número:"));
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
document.write(`El factorial de ${n} es:`, factorial);