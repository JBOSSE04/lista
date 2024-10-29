//1S
document.addEventListener('click', function() {
    alert('HAS CLICKADO');
  });
  //2
  document.addEventListener('mousemove', function(event) {
    const x = event.clientX
    const y = event.clientY;

    console.log(x,y) 
  });
  