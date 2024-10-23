//2

// function lanzamiento() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// console.log(`El dado ha sacado: ${lanzamiento()}`);
//for (let i = 0; i < ocurrencias.length; i++) {
//     console.log(`Número ${i + 1}: ${ocurrencias[i]} `);
// }

//3

function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1;
}

function simularTiradas(n) {
    const resultados = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < n; i++) {
        let resultado = lanzamiento();
        resultados[resultado - 1]++;
    }
    return resultados;
}

const veces = simularTiradas(6000);
for (let i = 0;i<veces.length; i++){
    console.log(`Numero ${i+1}:${veces[i]}`)
}







// //6
// function potencia(base, exponent) {
//     if (exponent === 0) return 1;
//     return base * potencia(base, exponent - 1);
//   }
  
//   // Pruebas de la función power
//   console.log(power(2, 3)); // 8
//   console.log(power(5, 4)); // 625
//   console.log(power(7, 2)); // 49





//7
// Función para calcular el factorial
    function factorial(n) {
      if (n === 0 || n === 1) return 1;
      return n * factorial(n - 1);
    }

    function generarTabla() {
      const tableBody = document.getElementById('factorialTable');
      for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        
        const numCell = document.createElement('td');
        numCell.textContent = i;
        
        const factorialCell = document.createElement('td');
        factorialCell.textContent = factorial(i);
        
        row.appendChild(numCell);
        row.appendChild(factorialCell);
        
        tableBody.appendChild(row);
      }
    }

    // Llama a la función para generar la tabla
    generarTabla();