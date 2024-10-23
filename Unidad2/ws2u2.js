// //1
// document.write("<br> "+Math.random());

// document.write("<br>" + Math.floor(Math.random() * (200 - 100 + 1)) + 100)

// let min = parseInt(prompt("Ingresa el primer valor:"));
// let max = parseInt(prompt("Ingresa el valor segundo valor:"));

// document.write("<br>El numero aleatorio es: "+ Math.floor(Math.random() * (max - min + 1)) + min);



//5._ (podemos tener tres soluciones diferentes depende del discriminate sea -, + o 0 )
// metodo toFixed = Devuelve una cadena que representa el número con (2) decimales
// y me los aproxima el ultimo dijito al alza

// let a = parseInt(prompt("Introduce el coeficiente a (debe ser distinto de 0): "));
// let b = parseInt(prompt("Introduce el coeficiente b: "));
// let c = parseInt(prompt("Introduce el coeficiente c: "));

// let discriminante = (b * b) - (4 * a * c);

// if (discriminante >= 0) {
//     let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
//     document.write("La solución es x = " + x1.toFixed(2));
// } else {
//     document.write("No tiene solución real.");
// } 



//7._

// document.write("<table>");
// document.write("<tr><th>Número</th><th>Seno</th></tr>");

// for (let i = 1; i <= 10; i++) {
//     let seno = Math.sin(i);
//     document.write("<tr><td>" + i + "</td><td>" + seno.toFixed(4) + "</td></tr>");
// }
// document.write("</table>");


//8._


// Array con las URLs de las imágenes
let imagenes = [
    i1= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Green_tick.svg/768px-Green_tick.svg.png",
    i2= "https://w7.pngwing.com/pngs/111/998/png-transparent-letter-x-illustration-x-mark-check-mark-desktop-x-mark-miscellaneous-angle-flag-thumbnail.png",
    i3= "https://e7.pngegg.com/pngimages/944/611/png-clipart-plus-and-minus-signs-plus-minus-sign-meno-symbol-subtraction-symbol-miscellaneous-rectangle.png",
];

let Aleatorio = Math.floor(Math.random() *3);

document.write("<img src='" + imagenes[Aleatorio] + "' alt='Imagen aleatoria' />");
