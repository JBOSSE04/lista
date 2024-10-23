//4.10\\

// document.write("<h1>PRUEBA DE BUCLE FOR</h1>")

// for (let i = 1; i <= 6; i++) {
//     document.write("<h"+i+">" + "Cabecera h" +i + "</h"+i+">" );
// }

//4.11
// var columnas = prompt("Introduce el número de columnas:");
// var altura = prompt("Introduce la altura de las celdas (en píxeles):");
// var ancho = prompt("Introduce el ancho de las celdas (en píxeles):");

// document.write('<table border="0" cellspacing="2" bgcolor="black" width="' + (ancho * columnas) + '">');
// document.write('<tr bgcolor="white" height="' + altura + '">');

// for (var i = 0; i < columnas; i++) {
//     document.write('<td width="' + ancho + '">&nbsp;</td>');
// }

//4.12
// let numColumnas = 4;
//     let alto = 50;
//     let ancho = 50;

//     document.write('<table border="0" cellspacing="2" bgcolor="black" width="' + (numColumnas * ancho) + '">');
//     document.write('<tr height="' + alto + '">');

//     for (let i = 1; i <= numColumnas; i++) {
//         if (i % 2 === 1) {  
//             document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>');
//         } else {  
//             document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
//         }
//     }

//     document.write('</tr>');
//     document.write('</table>');


//4.13


// var columnas = prompt("Introduce el número de columnas:");
// var altura = prompt("Introduce la altura de las celdas (en píxeles):");
// var ancho = prompt("Introduce el ancho de las celdas (en píxeles):");

// document.write('<table border="0" cellspacing="2" bgcolor="black" width="' + (ancho * columnas) + '">');
// document.write('<tr bgcolor="white" height="' + altura + '">');

// var i = 0;

// while (i < columnas) {
//     document.write('<td width="' + ancho + '">&nbsp;</td>');
//     i++;  
// }

// document.write('</tr>');
// document.write('</table>');


    

    //4.14


        // let numColumnas = 4;
        // let alto = 50;
        // let ancho = 50;
        
        // document.write('<table border="0" cellspacing="2" bgcolor="black" width="' + (numColumnas * ancho) + '">');
        // document.write('<tr height="' + alto + '">');
        
        // let i = 1;
        
        // while (i <= numColumnas) {
        //     if (i % 2 === 1) { 
        //         document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>');
        //     } else {  
        //         document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
        //     }
        //     i++;  
        // }
        
        // document.write('</tr>');
        // document.write('</table>');
        
    //4.17

// for (let i = 1; i <= 10; i++) {
//     document.write('<h3>Tabla del ' + i + '</h3>');  
    
//     for (let j = 1; j <= 10; j++) {
//         document.write(i + ' x ' + j + ' = ' + (i * j) + '<br>');
//     }
    
//     document.write('<br>');  
// }

//4.18

// var numColumnas = prompt("Introduce el número de columnas:");
// var numFilas = prompt("Introduce el número de filas:");
// var alto = prompt("Introduce la altura de las celdas (en píxeles):");
// var ancho = prompt("Introduce el ancho de las celdas (en píxeles):");

// document.write('<table border="0" cellspacing="2" bgcolor="black" width="' + (ancho * numColumnas) + '">');

// for (var j = 1; j <= numFilas; j++) {
//     document.write('<tr bgcolor="white" height="' + alto + '">');
    
//     for (var i = 1; i <= numColumnas; i++) {
//         document.write('<td width="' + ancho + '">&nbsp;</td>');
//     }
    
//     document.write('</tr>');
// }

// document.write('</table>');

//4.19

var Celda = prompt("Introduce el tamaño de las celdas (en píxeles):");

document.write('<table border="1" cellspacing="0" cellpadding="0">');

for (var fila = 0; fila < 8; fila++) {
    document.write('<tr>');  

    for (var columna = 0; columna < 8; columna++) {
        if ((fila + columna) % 2 === 0) {
            document.write('<td width="' + Celda + '" height="' + Celda + '" bgcolor="black">&nbsp;');
        } else {
            document.write('<td width="' + Celda + '" height="' + Celda + '" bgcolor="white">&nbsp;');

        }
    }

    document.write('</tr>');  
}

document.write('</table>');

