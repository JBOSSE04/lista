  let pantalla = document.getElementById('pantalla');
  let numeroActual = '';
  let numeroPrevio = '';
  let operador = '';

  function actualizarPantalla() {
      pantalla.textContent = numeroPrevio + ' ' + operador + ' ' + numeroActual;
  }

  document.getElementById('numeros').addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
          const numero = event.target.textContent;
          agregarNumero(numero);
      }
  });

  document.getElementById('operadores').addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
          const simboloOperador = event.target.textContent;
          if (simboloOperador === '=') {
              calcular();
          } else {
              agregarOperador(simboloOperador);
          }
      }
  });

  function agregarNumero(numero) {
      numeroActual += numero;
      actualizarPantalla();
  }

  function agregarOperador(simboloOperador) {
      if (numeroActual === '' && numeroPrevio === '') return; 
      if (numeroActual !== '') {
          if (numeroPrevio !== '') {
              calcular();
          }
          numeroPrevio = numeroActual;
          numeroActual = '';
      }
      operador = simboloOperador;
      actualizarPantalla();
  }

  function calcular() {
      if (numeroActual === '' || numeroPrevio === '' || operador === '') return;
      let resultado = 0;
      const num1 = parseFloat(numeroPrevio);
      const num2 = parseFloat(numeroActual);
      switch (operador) {
          case '+':
              resultado = num1 + num2;
              break;
          case '-':
              resultado = num1 - num2;
              break;
          case '*':
              resultado = num1 * num2;
              break;
          case '/':
              if (num2 === 0) {
                  pantalla.textContent = "Error: División por cero";
                  numeroActual = '';
                  numeroPrevio = '';
                  operador = '';
                  return;
              }
              resultado = num1 / num2;
              break;
      }
      numeroActual = resultado.toString();
      numeroPrevio = '';
      operador = '';
      actualizarPantalla();
  }

  actualizarPantalla();