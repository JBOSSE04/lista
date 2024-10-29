window.onload = () => {
    asociarEventos();
}
function asociarEventos() {
    function cAleatorios(cantidad) {
        function random(number) {
            return Math.floor(Math.random() * (number + 1));
        }
    
        const elementosSeleccionables = document.querySelectorAll(".id");
    
        const numeroAleatorio = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.querySelector(".titulos h1").textContent = numeroAleatorio;
    
        const indiceAleatorio = random(cantidad - 1);
    
        elementosSeleccionables.forEach((id, index) => {
           
           
           
            if (index === indiceAleatorio) {
                id.style.backgroundColor = numeroAleatorio;
            } else {
                id.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            }
                id.addEventListener("click", () => {
                if (id.style.backgroundColor === numeroAleatorio) {
                    elementosSeleccionables.forEach((element) => {
                        element.style.backgroundColor = numeroAleatorio;
                    });
                }
            });
        });
    }


    const nColorsLink = document.getElementById("nColors");
    const easyButton = document.getElementById("easy");
    const hardButton = document.getElementById("hard");

    nColorsLink.addEventListener("click", () => {
        cAleatorios(3);
    });
    cAleatorios(6);

    easyButton.addEventListener("click", () => {
        mostrarElementos(3);
    });

    hardButton.addEventListener("click", () => {
        mostrarElementos(6);
    });

    function mostrarElementos(cantidad) {
        const elementosSeleccionables = document.querySelectorAll(".id");
        elementosSeleccionables.forEach((element, index) => {
            element.style.display = index < cantidad ? "block" : "none";
        });

        cAleatorios(cantidad);
    }
}

