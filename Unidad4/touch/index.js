window.onload = () => {
    const figura = document.querySelector(".pelota");
    const div = document.querySelector(".div");
    const salida = document.querySelector(".salida");

    const maxX = div.clientWidth - figura.clientWidth;
    const maxY = div.clientHeight - figura.clientHeight;

    function mov(event) {
        let x = event.beta; 
        let y = event.gamma;

        salida.textContent = `beta: ${x}\n`;
        salida.textContent += `gamma: ${y}\n`;

        if (x > 100) {
            x = 100;
        }
        if (x < -100) {
            x = -100;
        }

       x += 100; y += 100;

        figura.style.left = `${(maxY * y) / 180 - 10}px`; 
        figura.style.top = `${(maxX * x) / 180 - 10}px`; 
        }

    window.addEventListener("deviceorientation", mov);

}