/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 */
function isOdd(x) {
    return x % 2 !== 0;
  }
  
  // // Prueba de isOdd
  // console.log(isOdd(3)); // true
  // console.log(isOdd(4)); // false
  
  // /**
  //  * @name inRange
  //  * @description Devuelve si un número se encuentra dentro de un rango
  //  * 
  //  * @param {number} x - El número a evaluar si se encuentra dentro del rango
  //  * @param {number} min - El límite inferior del rango
  //  * @param {number} max - El límite superior del rango
  //  * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
  //  */
  // function inRange(x, min, max) {
  //   return x >= min && x <= max;
  // }
  
  // // Prueba de inRange
  // console.log(inRange(2, -4, 10)); // true
  // console.log(inRange(12, 1, 10)); // false
  
  // /**
  //  * @name getBiggestNumber
  //  * @description Devuelve el número más grande de un array
  //  * 
  //  * @param {number[]} numbers - Un array de números
  //  * @returns {Number} El número más grande del array {numbers}
  //  */
  // function getBiggestNumber(numbers) {
  //   return Math.max(...numbers);
  // }
  
  // // Prueba de getBiggestNumber
  // console.log(getBiggestNumber([3, 8, 2, 1, 10])); // 10
  // console.log(getBiggestNumber([15, 22, 9, 34])); // 34
  
  // /**
  //  * @name getPercentage
  //  * @description Devuelve el porcentaje correspondiente de un número
  //  * 
  //  * @param {number} number - Número a obtener el porcentaje
  //  * @param {number} percentage - Porcentaje a obtener
  //  * @returns {Number}
  //  */
  // function getPercentage(number, percentage) {
  //   return (number * percentage) / 100;
  // }
  
  // // Prueba de getPercentage
  // console.log(getPercentage(200, 10)); // 20
  // console.log(getPercentage(500, 25)); // 125
  
  // /**
  //  * @name getRandomColorSequence
  //  * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
  //  * 
  //  * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
  //  * @param {number} length - Longitud de la secuencia
  //  * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
  //  */
  // function getRandomColorSequence(colors, length) {
  //   const sequence = [];
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * colors.length);
  //     sequence.push(colors[randomIndex]);
  //   }
  //   return sequence;
  // }
  
  // // Prueba de getRandomColorSequence
  // console.log(getRandomColorSequence(["red", "blue", "green"], 4)); // Ejemplo: ['blue', 'red', 'green', 'red']
  
  // /**
  //  * @name getRockPaperScissor
  //  * @description Devuelve una jugada aleatoria de piedra, papel o tijera
  //  * 
  //  * @returns {String} - Devuelve "rock", "paper" o "scissor"
  //  */
  // function getRockPaperScissor() {
  //   const choices = ["rock", "paper", "scissor"];
  //   const randomIndex = Math.floor(Math.random() * choices.length);
  //   return choices[randomIndex];
  // }
  
  // // Prueba de getRockPaperScissor
  // console.log(getRockPaperScissor()); // Ejemplo: "paper"
  
  // /**
  //  * @name getRockPaperScissorRandomSequence
  //  * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
  //  *
  //  * @param {number} length - Longitud de la secuencia
  //  * @returns {String[]}
  //  */
  // function getRockPaperScissorRandomSequence(length) {
  //   const sequence = [];
  //   for (let i = 0; i < length; i++) {
  //     sequence.push(getRockPaperScissor());
  //   }
  //   return sequence;
  // }
  
  // // Prueba de getRockPaperScissorRandomSequence
  // console.log(getRockPaperScissorRandomSequence(4)); // Ejemplo: ["rock", "paper", "rock", "scissor"]
  
  // /**
  //  * @name filterNumbersGreaterThan
  //  * @description Filtra los números de un array que sean mayores a cierto número x dejando solo los que sean menores a este
  //  *
  //  * @param {number[]} numbers - Array de números a filtrar
  //  * @param {number} filter - Número a partir del cuál filtrar los demás números
  //  * @returns {Number[]} - Array de números filtrados menores a {filter}
  //  */
  // function filterNumbersGreaterThan(numbers, filter) {
  //   return numbers.filter(num => num < filter);
  // }
  
  // // Prueba de filterNumbersGreaterThan
  // console.log(filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7)); // [3, 1, 4]
  
  // /**
  //  * @name getFactorial
  //  * @description Devuelve el factorial de un número
  //  *
  //  * @param {number} x - Número del cuál obtener factorial
  //  * @returns {Number} - Factorial de {x}
  //  */
  // function getFactorial(x) {
  //   if (x === 0 || x === 1) return 1;
  //   return x * getFactorial(x - 1);
  // }
  
  // // Prueba de getFactorial
  // console.log(getFactorial(4)); // 24
  // console.log(getFactorial(5)); // 120
  
  // /**
  //  * @name areArraysEqual
  //  * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
  //  *
  //  * @param {[]} a 
  //  * @param {[]} b 
  //  * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
  //  */
  // function areArraysEqual(a, b) {
  //   if (a.length !== b.length) return false;
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] !== b[i]) return false;
  //   }
  //   return true;
  // }
  
  // // Prueba de areArraysEqual
  // console.log(areArraysEqual([1, 4], [1, 4])); // true
  // console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false
  
  // /**
  //  * @name toHackerSpeak
  //  * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i" en 1, las "o" en 0 y las "s" en 5
  //  *
  //  * @param {string} text 
  //  * @returns {String} - El texto convertido a "Hacker Speak"
  //  */
  // function toHackerSpeak(text) {
  //   const replacements = { a: '4', e: '3', i: '1', o: '0', s: '5' };
  //   return text.replace(/[aeios]/gi, letter => replacements[letter.toLowerCase()]);
  // }
  
  // // Prueba de toHackerSpeak
  // console.log(toHackerSpeak("I'm a hacker now")); // "1'm 4 h4ck3r n0w"
  
  // /**
  //  * @name getFileExtension
  //  * @description Obtiene la extensión de un archivo
  //  *
  //  * @param {string} file - El nombre del archivo a obtener la extensión 
  //  * @returns {String} - La extensión del archivo
  //  */
  // function getFileExtension(file) {
  //   return file.split('.').pop();
  // }
  
  // // Prueba de getFileExtension
  // console.log(getFileExtension("imagen.jpg")); // "jpg"
  // console.log(getFileExtension("documento.pdf")); // "pdf"
  
  // /**
  //  * @name flatArray
  //  * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
  //  *
  //  * @param {[][]} arr - Array 2D a "aplanar" 
  //  * @returns {[]} - El array "aplanado"
  //  */
  // function flatArray(arr) {
  //   return arr.reduce((flat, current) => flat.concat(current), []);
  // }
  
  // // Prueba de flatArray
  // console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]])); // [1, 5, 4, 3, 10, 2, 5]
  
  // /**
  //  * @name removeDuplicates
  //  * @description Remueve duplicados de un array 
  //  *
  //  * @param {[]} arr - Array con duplicados a remover
  //  * @returns {[]} - El array resultante sin duplicados
  //  */
  // function removeDuplicates(arr) {
  //   return [...new Set(arr)];
  // }
  
  // // Prueba de removeDuplicates
  // console.log(removeDuplicates([4, 5, 10, 4, 10, 2])); // [4, 5, 10, 2]
  
  // /**
  //  * @name countLetter
  //  * @description Devuelve la cantidad de veces que una letra aparece en un string 
  //  *
  //  * @param {string} letter - Letra a contar
  //  * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
  //  * @returns {Number} - Número de veces que aparece {letter} en {text}
  //  */
  // function countLetter(letter, text) {
  //   return [...text].filter(char => char === letter).length;
  // }
  
  // // Prueba de countLetter
  // console.log(countLetter('e', "Here we go again!")); // 3
  
  // /**
  //  * @name canPlay
  //  * @description Devuelve si dada una mano de Uno y una carta en la mesa, puede jugar o tiene que retirar del mazo. 
  //  *
  //  * @param {string[]} hand - Array de cartas que tiene en la mano 
  //  * @param {string} face - Carta que está en la mesa
  //  * @returns {Boolean} - Devuelve true si puede jugar alguna carta, o false si tiene que retirar del mazo
  //  */
  // function canPlay(hand, face) {
  //   const [faceColor, faceNumber] = face.split(' ');
  //   return hand.some(card => {
  //     const [cardColor, cardNumber] = card.split(' ');
  //     return cardColor === faceColor || cardNumber === faceNumber;
  //   });
  // }
  
  // // Prueba de canPlay
  // console.log(canPlay(['red 4', 'blue 3', 'yellow 7'], 'yellow 4')); // true
  // console.log(canPlay(['green 2', 'blue 9', 'red 5'], 'yellow 1')); // false
  
  // /**
  //  * @name removeWords
  //  * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
  //  *
  //  * @param {string} str - Texto a recortar 
  //  * @param {string[]} words - Palabras a remover
  //  * @returns {string} - Texto resultante con las palabras removidas
  //  */
  // function removeWords(str, words) {
  //   return str.split(' ').filter(word => !words.includes(word)).join(' ');
  // }
  
  // // Prueba de removeWords
  // console.log(removeWords("Este es un texto de prueba", ["es", "de"])); // "Este un texto prueba"
  
  // /**
  //  * @name getRange
  //  * @description Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede incluir los números iniciales o no
  //  *
  //  * @param {number} a 
  //  * @param {number} b
  //  * @param {boolean} [inclusive=true] inclusive // Parámetro opcional, valor por defecto true
  //  * @returns {number[]} - Array de números entre a y b, incluyendo a y b
  //  */
  // function getRange(a, b, inclusive = true) {
  //   const range = [];
  //   const step = a < b ? 1 : -1;
  //   if (inclusive) {
  //     for (let i = a; i !== b + step; i += step) {
  //       range.push(i);
  //     }
  //   } else {
  //     for (let i = a + step; i !== b; i += step) {
  //       range.push(i);
  //     }
  //   }
  //   return range;
  // }
  
  // // Prueba de getRange
  // console.log(getRange(1, 5)); // [1, 2, 3, 4, 5]
  // console.log(getRange(10, 6, false)); // [9, 8, 7]
  