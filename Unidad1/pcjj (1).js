// // Ejercicio 1: Mostrar todos los números de 1 a n aumentando de 1 en 1
// let n1 = parseInt(prompt("Ingrese un número para el Ejercicio 1:"));
// for (let i = 1; i <= n1; i++) {
//   console.log(i);
// }

// // Ejercicio 2: Mostrar todos los números de 1 a n aumentando de 2 en 2
// let n2 = parseInt(prompt("Ingrese un número para el Ejercicio 2:"));
// for (let i = 1; i <= n2; i += 2) {
//   console.log(i);
// }

// // Ejercicio 3: Mostrar todos los números de n a 1 disminuyendo de 1 en 1
// let n3 = parseInt(prompt("Ingrese un número para el Ejercicio 3:"));
// for (let i = n3; i >= 1; i--) {
//   console.log(i);
// }

// // Ejercicio 4: Tabla del 9 hasta 9x10
// for (let i = 1; i <= 10; i++) {
//   console.log(`9 x ${i} = ${9 * i}`);
// }

// // Ejercicio 5: Sumar todos los dígitos de un número (validar sin letras)
// let num5 = prompt("Ingrese un número para el Ejercicio 5:");
// if (  .test(num5)) {
//   let suma = 0;
//   for (let char of num5) {
//     suma += parseInt(char);
//   }
//   console.log("La suma de los dígitos es:", suma);
// } else {
//   console.log("Por favor, ingrese un número válido.");
// }

// Ejercicio 6: Sumar todos los números pares entre n y m
// let n6 = parseInt(prompt("Ingrese el primer número para el Ejercicio 6:"));
// let m6 = parseInt(prompt("Ingrese el segundo número para el Ejercicio 6:"));
// let suma6 = 0;
// for (let i = Math.min(n6, m6); i <= Math.max(n6, m6); i++) {
//   if (i % 2 === 0) {
//     suma6 += i;
//   }
// }
// document.write("La suma de los números pares es:", suma6);

// // Ejercicio 7: Sumatoria de los primeros n números
// let n7 = parseInt(prompt("Ingrese un número para el Ejercicio 7:"));
// let suma7 = 0;
// for (let i = 1; i <= n7; i++) {
//   suma7 += i;
// }
// console.log("La sumatoria es:", suma7);

// // Ejercicio 8: Factorial de los primeros n números
let n8 = parseInt(prompt("Ingrese un número para el Ejercicio 8:"));
let factorial = 1;
for (let i = 1; i <= n8; i++) {
  factorial *= i;
}
document.write(`El factorial de ${n8} es:`, factorial);

// // Ejercicio 9: Encontrar todos los divisores de un número
// let num9 = parseInt(prompt("Ingrese un número para el Ejercicio 9:"));
// console.log(`Divisores de ${num9}:`);
// for (let i = 1; i <= num9; i++) {
//   if (num9 % i === 0) {
//     console.log(i);
//   }
// }

// // Ejercicio 10: Determinar si un número es primo
// let num10 = parseInt(prompt("Ingrese un número mayor o igual a 2 para el Ejercicio 10:"));
// let esPrimo = num10 >= 2;
// for (let i = 2; i < num10; i++) {
//   if (num10 % i === 0) {
//     esPrimo = false;
//     break;
//   }
// }
// console.log(esPrimo ? `${num10} es primo` : `${num10} no es primo`);

// // Ejercicio 11: Determinar si un número es perfecto
// let num11 = parseInt(prompt("Ingrese un número para el Ejercicio 11:"));
// let sumaDivisores = 0;
// for (let i = 1; i < num11; i++) {
//   if (num11 % i === 0) {
//     sumaDivisores += i;
//   }
// }
// console.log(sumaDivisores === num11 ? `${num11} es perfecto` : `${num11} no es perfecto`);

// // Ejercicio 12: Generar los primeros n números primos
// let n12 = parseInt(prompt("Ingrese cuántos números primos desea para el Ejercicio 12:"));
// let count12 = 0;
// let num12 = 2;
// while (count12 < n12) {
//   let esPrimo = true;
//   for (let i = 2; i < num12; i++) {
//     if (num12 % i === 0) {
//       esPrimo = false;
//       break;
//     }
//   }
//   if (esPrimo) {
//     console.log(num12);
//     count12++;
//   }
//   num12++;
// }

// // Ejercicio 13: Generar los primeros n números perfectos
// let n13 = parseInt(prompt("Ingrese cuántos números perfectos desea para el Ejercicio 13:"));
// let count13 = 0;
// let num13 = 2;
// while (count13 < n13) {
//   let sumaDivisores13 = 0;
//   for (let i = 1; i < num13; i++) {
//     if (num13 % i === 0) {
//       sumaDivisores13 += i;
//     }
//   }
//   if (sumaDivisores13 === num13) {
//     console.log(num13);
//     count13++;
//   }
//   num13++;
// }

// // Ejercicio 14: Dibujar un cuadrado lleno
// let size14 = 5;
// for (let i = 0; i < size14; i++) {
//   document.write("*".repeat(size14) + "<br>");
// }

// // Ejercicio 15: Dibujar un cuadrado hueco
// let size15 = 5;
// for (let i = 0; i < size15; i++) {
//   if (i === 0 || i === size15 - 1) {
//     document.write("*".repeat(size15) + "<br>");
//   } else {
//     document.write("*" + " ".repeat(size15 - 2) + "*" + "<br>");
//   }
// }

// // Ejercicio 16: Dibujar un tablero de ajedrez
// let size16 = 8;
// for (let i = 0; i < size16; i++) {
//   let row = i % 2 === 0 ? "* " : " *";
//   document.write(row.repeat(size16 / 2) + "<br>");
// }

// // Ejercicio 17: Dibujar una pirámide izquierda
// let size17 = 5;
// for (let i = 1; i <= size17; i++) {
//   document.write("*".repeat(i) + "<br>");
// }

// // Ejercicio 18: Dibujar una pirámide centrada
// let size18 = 5;
// for (let i = 1; i <= size18; i++) {
//   document.write(" ".repeat(size18 - i) + "*".repeat(2 * i - 1) + "<br>");
// }

// // Ejercicio 19: Dibujar una pirámide invertida
// let size19 = 5;
// for (let i = size19; i >= 1; i--) {
//   document.write(" ".repeat(size19 - i) + "*".repeat(2 * i - 1) + "<br>");
// }

// // Ejercicio 20: Dibujar un diamante
// let size20 = 5;
// for (let i = 1; i <= size20; i++) {
//   document.write(" ".repeat(size20 - i) + "*".repeat(2 * i - 1) + "<br>");
// }
// for (let i = size20 - 1; i >= 1; i--) {
//   document.write(" ".repeat(size20 - i) + "*".repeat(2 * i - 1) + "<br>");
// }
