//5
// function paresImpares() {
//     let numeros = [];
//     for (let i = 0; i < 100; i++) {
//         numeros.push(Math.floor(Math.random() * 1000) + 1);
//     }

//     console.log("Array original:", numeros);

//     let pares = numeros.filter(n => n % 2 === 0);
//     let impares = numeros.filter(n => n % 2 !== 0);
//     let organizados = [...pares, ...impares];

//     console.log("Array organizado:", organizados);
// }

// paresImpares();

//7

// let array = Array(10).fill(0);

// function establecerACero() {
//     array.fill(0);
// }

// function incrementar() {
//     for (let i = 0; i < array.length; i++) {
//         array[i]++;
//     }
// }

// function mostrarValores() {
//     console.log(array.join(" "));
// }

// establecerACero();
// incrementar();
// mostrarValores();  // Muestra los valores del array

//8






// function simularDados() {
//     let resultados = Array(11).fill(0);  // Suma de 2 a 12

//     for (let i = 0; i < 36000; i++) {
//         let dado1 = Math.floor(Math.random() * 6) + 1;
//         let dado2 = Math.floor(Math.random() * 6) + 1;
//         let suma = dado1 + dado2;
//         resultados[suma - 2]++;
//     }

//     document.write("<table>");
//     document.write("<tr><th>Numeros</th><th>Nºcomb</th></tr>");

//     for (let i = 0; i < resultados.length; i++) {
//         document.write("<tr>");
//         document.write("<td>" + (i + 2) + "</td>");
//         document.write("<td>" + resultados[i] + "</td>");
//         document.write("</tr>");
//     }

//     document.write("</table>");
// }

// simularDados();


///9

function simularDados() {
    let combinaciones = Array.from(
        { length: 6 }, () => Array(6).fill(0)
    );

    for (let i = 0; i < 36000; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        combinaciones[dado1 - 1][dado2 - 1]++;
    }
    // console.table(combinaciones);
    document.write("<table border='2'>");
    document.write("<tr><td>indice</td>");

    for (let i = 1; i <= 6; i++) {
        document.write("<td>" + i + "</td>");
    }

    for (let i = 0; i < combinaciones.length; i++) {
        document.write("<tr>");
        document.write("<th>" + (i + 1) + "</th>");
        for (let j = 0; j <= 5; j++) {
            document.write("<td>" + combinaciones[i][j] + "</td>");

        }
        document.write("</tr>");
    }
    document.write("</table>");
}
simularDados();

