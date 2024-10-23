// c) Encuentra la palabra más larga
function encuentraPalabraMasLarga() {
    var cadena = prompt("Introduce una cadena para encontrar la palabra más larga:");
    var palabra = "";
    var palabraMasLarga = "";
    for (var i = 0; i <= cadena.length; i++) {
        if (i === cadena.length || cadena.charAt(i) === " ") {
            if (palabra.length > palabraMasLarga.length) {
                palabraMasLarga = palabra;
            }
            palabra = "";
        } else {
            palabra += cadena.charAt(i);
        }
    }
    document.write("Longitud de la palabra más larga: " + palabraMasLarga.length + "<br>");
}

// d) Filtra palabras más largas que 'i'
function filtraPalabrasMasLargas() {
    var cadena = prompt("Introduce una cadena:");
    var i = parseInt(prompt("Introduce el valor numérico i:"));
    var palabra = "";
    var contador = 0;
    for (var j = 0; j <= cadena.length; j++) {
        if (j === cadena.length || cadena.charAt(j) === " ") {
            if (palabra.length > i) {
                contador++;
            }
            palabra = "";
        } else {
            palabra += cadena.charAt(j);
        }
    }
    document.write("Número de palabras mayores a " + i + ": " + contador + "<br>");
}

// e) Formatea la cadena correctamente (primera letra en mayúscula)
function cadenaBienFormada() {
    var cadena = prompt("Introduce una cadena para formatear:");
    var primeraLetra = cadena.charAt(0).toUpperCase();
    var restoCadena = cadena.substring(1).toLowerCase();
    document.write("Cadena bien formada: " + primeraLetra + restoCadena + "<br>");
}

// Ejecuciones de las funciones con `prompt`
invierteCadena();
inviertePalabras();
encuentraPalabraMasLarga();
filtraPalabrasMasLargas();
cadenaBienFormada();



//2
function informacionCadena() {
    var cadena = prompt("Introduce una cadena :");
    if (cadena === cadena.toUpperCase()) {
        document.write("Son todo mayusculas.<br>");
    } else if (cadena === cadena.toLowerCase()) {
        document.write("Son todo minusculas.<br>");
    } else {
        document.write("Son mayusculas y minusculas.<br>");
    }
}

// Ejecución
informacionCadena();

// //3
// function localizarSubcadena() {
//     var cadena = prompt("Introduce una cadena:");
//     var subcadena = prompt("Introduce lo que quieres buscar:");
//     var posiciones = "";
//     var posicion = cadena.indexOf(subcadena);
//     while (posicion !== -1) {
//         posiciones += posicion + " ";
//         posicion = cadena.indexOf(subcadena, posicion + 1);
//     }
//     document.write("Posicion de '" + subcadena + "': " + posiciones + "<br>");
// }

// // Ejecución
// localizarSubcadena();

// //4
// function reorganizarConsonantesYVocales() {
//     var cadena = prompt("Introduce una cadena para reorganizar:");
//     var consonantes = "";
//     var vocales = "";
//     for (var i = 0; i < cadena.length; i++) {
//         var letra = cadena.charAt(i);
//         if ("aeiouAEIOU".indexOf(letra) !== -1) {
//             vocales += letra;
//         } else if (letra !== " ") {
//             consonantes += letra;
//         }
//     }
//     document.write("Resultado: " + consonantes + vocales + "<br>");
// }

// // Ejecución
// reorganizarConsonantesYVocales();

// //5
// function eliminarCaracteresRepetidos() {
//     var cadena = prompt("Introduce una cadena para eliminar caracteres repetidos:");
//     var resultado = "";
//     for (var i = 0; i < cadena.length; i++) {
//         if (resultado.indexOf(cadena.charAt(i)) === -1 && cadena.charAt(i) !== " ") {
//             resultado += cadena.charAt(i);
//         }
//     }
//     document.write("Cadena sin caracteres repetidos: " + resultado + "<br>");
// }

// // Ejecución
// eliminarCaracteresRepetidos();

// //6
// function esSubcadena() {
//     var cadena = prompt("Introduce una cadena:");
//     var subcadena = prompt("Introduce una subcadena para verificar:");
//     var posicion = cadena.indexOf(subcadena);
//     if (posicion !== -1) {
//         document.write("La subcadena '" + subcadena + "' comienza en la posición " + posicion + "<br>");
//     } else {
//         document.write("La subcadena '" + subcadena + "' no está presente.<br>");
//     }
// }

// // Ejecución
// esSubcadena();

//7
function esPalindromo() {
    var cadena = prompt("Introduce una cadena ");
    var cadenaLimpia = "";
    for (var i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) !== " ") {
            cadenaLimpia += cadena.charAt(i).toLowerCase();
        }
    }

    var cadenaInvertida = "";
    for (var o = cadenaLimpia.length - 1; o >= 0; o--) {
        cadenaInvertida += cadenaLimpia.charAt(o);
    }

    if (cadenaLimpia === cadenaInvertida) {
        document.write("'" + cadena + "' es un palindromo.<br>");
    } else {
        document.write("'" + cadena + "' no es un palíndromo.<br>");
    }
}

// // Ejecución
// esPalindromo();

// //8
// function contarPalabras() {
//     var cadena = prompt("Introduce una cadena para contar el número de palabras:");
//     var contador = 0;
//     var dentroDePalabra = false;
//     for (var i = 0; i < cadena.length; i++) {
//         if (cadena.charAt(i) !== " " && !dentroDePalabra) {
//             dentroDePalabra = true;
//             contador++;
//         } else if (cadena.charAt(i) === " ") {
//             dentroDePalabra = false;
//         }
//     }
//     document.write("Número de palabras: " + contador + "<br>");
// }

// // Ejecución
// contarPalabras();

//9
function formatearEnTabla() {
    var palabra = "HOLA";
    var longitud = palabra.length;

    document.write("<table border='1' cellpadding='10'>");

    for (var i = 0; i < longitud; i++) {
        document.write("<td>" + palabra.charAt(i) + "</td>");
    }
    document.write("</tr>");

    for (var i = 1; i < longitud - 1; i++) {
        document.write("<tr>");
        document.write("<td>" + palabra.charAt(i) + "</td>");

        for (var o = 1; o < longitud - 1; o++) {
            document.write("<td>&nbsp;</td>");
        }

        document.write("<td>" + palabra.charAt(longitud - 1 - i) + "</td>");
        document.write("</tr>");
    }

    for (var i = longitud - 1; i >= 0; i--) {
        document.write("<td>" + palabra.charAt(i) + "</td>");
    }
    document.write("</tr>");

    document.write("</table>");
}

formatearEnTabla();
