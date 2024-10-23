//4

// let w = window.innerWidth;
// let h = window.innerHeight;
// let o = window.outerHeight;
// let oh = window.outerWidth;


// document.write("<table border='1' >");
// document.write("<td></td>");
//     document.write("<tdr>aa</tdr>");
// document.write()


// document.write("</table>")

// for(prop in navigator){
//     document.write(prop + ' - ' + screen[prop]);
//     document.write('<br></br>');

// }












// 1
var informacion = {
    "Nombre ": navigator.appName,
    "Versión ": navigator.appVersion,
    "Código": navigator.appCodeName,
    "User-Agent": navigator.userAgent,
    "Plataforma": navigator.platform,
    "Idioma": navigator.language,
    "Cookies": navigator.cookieEnabled
};

document.write("Información del Navegador");
document.write("<table>");

for (var propiedad in informacion) {
    document.write("<tr><td>" + propiedad + "</td><td>" + informacion[propiedad] + "</td></tr>");
}

document.write("</table>");



// document.write("<tr><td>Nombre</td><td>" + informacion["Nombre"] + "</td></tr>");
// document.write("<tr><td>Versión</td><td>" + informacion["Versión"] + "</td></tr>");
// document.write("<tr><td>Código</td><td>" + informacion["Código"] + "</td></tr>");
// document.write("<tr><td>User-Agent</td><td>" + informacion["User-Agent"] + "</td></tr>");
// document.write("<tr><td>Plataforma</td><td>" + informacion["Plataforma"] + "</td></tr>");
// document.write("<tr><td>Idioma</td><td>" + informacion["Idioma"] + "</td></tr>");
// document.write("<tr><td>Cookies</td><td>" + informacion["Cookies"] + "</td></tr>");




// 2

// const informacion = {
//     "Ancho pantalla": screen.width ,
//     "Alto pantalla": screen.height,
//     "Ancho disponible ": screen.availWidth,
//     "Alto disponible ": screen.availHeight,
//     "Profundidad de color": screen.colorDepth ,
//     "Resolución de pixel": screen.pixelDepth 
// };

// document.write("<h2>Información: Pantalla del Cliente</h2>");
// document.write("<table>");

// for (var propiedad in informacion) {
//     document.write("<tr><td>" + propiedad + "</td><td>" + informacion[propiedad] + "</td></tr>");
// }

// document.write("</table>");



