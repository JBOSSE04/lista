// let foto = null;
// let x;
// let y;

// document.querySelectorAll('.imagen').forEach(imagen => {
//   imagen.addEventListener('mousedown', (event) => {
//     foto = event.target;
//     offsetX = event.clientX - foto.getBoundingClientRect().left;
//     offsetY = event.clientY - foto.getBoundingClientRect().top;
//     foto.style.cursor = 'grabbing';
//   });
//   document.addEventListener('mousemove', (event) => {
//     if (foto) {
//         foto.style.left = `${event.clientX - x}px`;
//         foto.style.top = `${event.clientY - y}px`;
//     }
//   });

//   document.addEventListener('mouseup', () => {
//     if (foto) {
//         foto.style.cursor = 'grab';
//         foto = null;
//     }
//   });


// });


ball = document.getElementsByTagName("img");

Array.from(ball).forEach(ball => {

ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);
  
    moveAt(event.pageX, event.pageY);
  
    // mueve la pelota a las coordenadas (pageX, pageY)
    // tomando la posición inicial en cuenta
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mueve la pelota con mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // suelta la pelota, elimina el manejador innecesario
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };
  
  ball.ondragstart = function() {
    return false;
  };
});
//////////