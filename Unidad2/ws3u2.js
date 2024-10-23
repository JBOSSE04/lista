// //1 
// let cadena = prompt("Introduzca una cadena de texto");

// function invertir(cadena){


//     let separarCadena = cadena.split("");

//     let invertirCadena = separarCadena.reverse("");

//     let unirCadena = invertirCadena.join("");

//     return unirCadena;

// }

// document.write(invertir(cadena));



//b


// let cadena = prompt("Introduzca una cadena de texto");

// function inviertePalabras(cad_arg) {
//     let palabrasInvertidas = [];

//     let palabras = cad_arg.split(" ");
        
//     for (let i = 0; i < palabras.length; i++) {
        
//         let palabraInvertida = palabras[i].split("").reverse().join("");
        
//          palabrasInvertidas.push(palabraInvertida);
//     }
    
//     return palabrasInvertidas.join(" ");
// }

// document.write(inviertePalabras(cadena));


//c
// var cadena = prompt("Introduce una cadena para encontrar la palabra más larga:");
//   var palabra = "";
//   var palabraMasLarga = "";

// function encuentraPalabraMasLarga() {
  
//   for (var i = 0; i <= cadena.length; i++) {
//       if (i === cadena.length || cadena.charAt(i) === " ") {
//           if (palabra.length > palabraMasLarga.length) {
//               palabraMasLarga = palabra;
//           }
//           palabra = "";
//       } else {
//           palabra += cadena.charAt(i);
//       }
//   }
//   document.write("Longitud de la palabra más larga: " + palabraMasLarga.length + "<br>");

// }
// encuentraPalabraMasLarga();


//d
// function filtraPalabrasMasLargas() {
//   var cadena = prompt("Introduce una cadena:");
//   var i = parseInt(prompt("Introduce el valor numérico i:"));
//   var palabra = "";
//   var contador = 0;
//   for (var j = 1; j <= cadena.length; j++) {
//       if (j === cadena.length || cadena.charAt(j) === " ") {
//           if (palabra.length > i) {
//               contador++;
//           }
//           palabra = "";
//       } else {
//           palabra += cadena.charAt(j);
//       }
//   }
//   document.write("Número de palabras mayores a " + i + ": " + contador + "<br>");
// }

// filtraPalabrasMasLargas();



//e
// function cadenaBienFormada() {
//   var cadena = prompt("Introduce una cadena para formatear:");
//   var primeraLetra = cadena.charAt(0).toUpperCase();
//   var restoCadena = cadena.substring(1).toLowerCase();
//   document.write("Cadena bien formada: " + primeraLetra + restoCadena + "<br>");
// }

// cadenaBienFormada();


//2

// function informacionCadena() {
//   var cadena = prompt("Introduce una cadena :");
//   if (cadena === cadena.toUpperCase()) {
//       document.write("Son todo mayusculas.<br>");
//   } else if (cadena === cadena.toLowerCase()) {
//       document.write("Son todo minusculas.<br>");
//   } else {
//       document.write("Son mayusculas y minusculas.<br>");
//   }
// }
// informacionCadena();



//7

// function esPalindromo() {
//   var cadena = prompt("Introduce una cadena ");
//   var cadenaLimpia = "";
//   for (var i = 0; i < cadena.length; i++) {
//       if (cadena.charAt(i) !== " ") {
//           cadenaLimpia += cadena.charAt(i).toLowerCase();
//       }
//   }

//   var cadenaInvertida = "";
//   for (var o = cadenaLimpia.length - 1; o >= 0; o--) {
//       cadenaInvertida += cadenaLimpia.charAt(o);
//   }

//   if (cadenaLimpia === cadenaInvertida) {
//       document.write("'" + cadena + "' es un palindromo.<br>");
//   } else {
//       document.write("'" + cadena + "' no es un palíndromo.<br>");
//   }
// }

//  esPalindromo();




//9



function formatearEnTabla() {
  var palabra = "HOLA";
  var longitud = palabra.length;

  document.write("<table border='0' >");

  for (var i = 0; i < longitud; i++) {
      document.write("<td>" + palabra.charAt(i) + "</td>");
  }
  document.write("</tr>");
  for (var i = 1; i < longitud - 1; i++) {
    document.write("<tr>");

    document.write("<td>" + palabra.charAt(i) + "</td>");
    for (var j = 2; j <= longitud ; j++) {
      document.write("<td>&nbsp;</td>");
  }
    document.write("<td>     " + palabra.charAt(longitud - 1 - i) + "</td>");
    document.write("</tr>");
}

  for (var i = longitud - 1; i >= 0; i--) {
      document.write("<td>" + palabra.charAt(i) + "</td>");
  }
  document.write("</tr>");

  document.write("</table>");
}

formatearEnTabla();
