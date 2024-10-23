//1._


// function ejr1(){
//     const fechaActual = new Date();


// document.write("año: " + fechaActual.getFullYear() + "<br>");
// document.write("mes: " + (fechaActual.getMonth()+1) + "<br>");
// document.write("día: " + fechaActual.getDate() + "<br>");
// document.write("hora : " + fechaActual.getHours() + "<br>");
// document.write("minutos : " + fechaActual.getMinutes() + "<br>");
// document.write("segundos : " + fechaActual.getSeconds() + "<br>");
// document.write("<br></br>");
// }

// setInterval(ejr1, 5000);

//2._

// const fechaHoy = new Date();
// document.write("hoy: " + fechaHoy.toLocaleDateString() + "<br>");

// const fecha85 = new Date(fechaHoy);  
// fecha85.setDate(fecha85.getDate() + 85);
// document.write("mas 85 días: " + fecha85.toLocaleDateString() + "<br>");

// const fecha187 = new Date(fechaHoy); 
// fecha187.setDate(fecha187.getDate() - 187);
// document.write("menos 187 días: " + fecha187.toLocaleDateString() + "<br>");

// const mas2Años = new Date(fecha85);  
// mas2Años.setFullYear(mas2Años.getFullYear() + 2);
// document.write("mas 2 años : " + mas2Años.toLocaleDateString() + "<br>");

// const menos24Horas = new Date(fecha187);  
// menos24Horas.setHours(menos24Horas.getHours() - 24);
// document.write("menos 24 horas : " + menos24Horas.toLocaleDateString() + "<br>");


// const fechaResto = new Date(fechaHoy);
// fechaResto.setDate(fecha85.getDate() - fecha187.getDate());
// document.write("fechaResto: " + fechaResto.toLocaleDateString() + "<br>" );




// horas = (horas < 10 ? '0' : '') + horas;

//3

// function cuentaAtras(segundos) {
//     if (segundos >= 0) {
//       document.write(" "+ segundos + " s<br>");
//       setTimeout(function() {
//         cuentaAtras(segundos -1 );
//       }, 1000);
//     }
//   }
  
//   cuentaAtras(61);
  

   


// 5
 // document.body.innerHTML= "Hora actual:"+ horas +":"+ minutos+":" + segundos + "<br>" ;

  
  function reloj() {
    const fecha = new Date();
  
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
  
    const hora = `${horas}:${minutos}:${segundos} <br>`;
    document.write(hora);
  
    setTimeout(reloj, 1000);
  }
  
  reloj();





  //   // c) Encontrar palabra más larga
//   function encuentraPalabraMasLarga(cad_arg) {
//     return Math.max(...cad_arg.split(' ').map(palabra => palabra.length));
//   }
  
//   // d) Filtrar palabras más largas
//   function filtraPalabrasMasLargas(cad_arg, i) {
//     return cad_arg.split(' ').filter(palabra => palabra.length > i).length;
//   }
  
//   // e) Cadena bien formada
//   function cadenaBienFormada(cad_arg) {
//     return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
//   }
  
//   // 2) Información sobre la cadena
//   function informacionCadena(cad_arg) {
//     if (cad_arg === cad_arg.toUpperCase()) return "Solo mayúsculas";
//     if (cad_arg === cad_arg.toLowerCase()) return "Solo minúsculas";
//     return "Mezcla de mayúsculas y minúsculas";
//   }
  
//   // 3) Localizar apariciones de subcadena
//   function localizarSubcadena(cadena, subcadena) {
//     let posiciones = [];
//     let pos = cadena.indexOf(subcadena);
//     while (pos !== -1) {
//       posiciones.push(pos);
//       pos = cadena.indexOf(subcadena, pos + 1);
//     }
//     return posiciones;
//   }
  
//   // 4) Consonantes al principio, vocales al final
//   function reorganizarCadena(cad_arg) {
//     const vocales = 'aeiouAEIOU';
//     let consonantes = '';
//     let vocalesStr = '';
//     for (let char of cad_arg) {
//       if (char !== ' ') {
//         vocales.includes(char) ? vocalesStr += char : consonantes += char;
//       }
//     }
//     return consonantes + vocalesStr;
//   }
  
//   // 5) Eliminar caracteres repetidos
//   function eliminarRepetidos(cad_arg) {
//     return [...new Set(cad_arg.split(''))].join('');
//   }
  
//   // 6) Verificar subcadena
//   function esSubcadena(cadena, subcadena) {
//     const pos = cadena.indexOf(subcadena);
//     return pos !== -1 ? `Es subcadena y comienza en la posición ${pos}` : "No es subcadena";
//   }
  
//   // 7) Verificar palíndromo
//   function esPalindromo(cad_arg) {
//     const limpia = cad_arg.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return limpia === limpia.split('').reverse().join('');
//   }
  
//   // 8) Contar palabras
//   function contarPalabras(cad_arg) {
//     return cad_arg.trim().split(/\s+/).length;
//   }
  
//   // 9) Formatear palabra en tabla
//   function formatearPalabra(palabra) {
//     let resultado = '';
//     for (let i = 0; i < palabra.length; i++) {
//       let fila = '';
//       for (let j = 0; j < palabra.length; j++) {
//         fila += palabra[(i + j) % palabra.length] + ' ';
//       }
//       resultado += fila.trim() + '\n';
//     }
//     return resultado;
//   