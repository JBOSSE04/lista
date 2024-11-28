class Bola {
    constructor(id, x, y, radio, velocidadX, velocidadY) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.color = "black";
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;
    }

// Crear elemento SVG de la pelota
    crearElementoSVG() {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("id", this.id);
        circle.setAttribute("cx", this.x);
        circle.setAttribute("cy", this.y);
        circle.setAttribute("r", this.radio);
        circle.setAttribute("fill", this.color);
        circle.style.cursor = "pointer";
        return circle;
    }
}

// Configuración
let pelotas = [];
const numPelotas = 10;

// Crear pelotas y añadirlas al SVG
function crearPelotas(area) {
    const ancho = area.clientWidth;
    const alto = area.clientHeight;

    for (let i = 0; i < numPelotas; i++) {
        const radio = 20;
        const x = Math.random() * (ancho - 2 * radio) + radio;
        const y = Math.random() * (alto - 2 * radio) + radio;
        const velocidadX = Math.random() * 10 - 1;
        const velocidadY = Math.random() * 10 - 1;
        const bola = new Bola(`bola-${i}`, x, y, radio, velocidadX, velocidadY);

        const elementoSVG = bola.crearElementoSVG();

// Evento para eliminar pelota al hacer clic
        elementoSVG.addEventListener("click", () => {
            area.removeChild(elementoSVG);
            pelotas = pelotas.filter(p => p.id !== bola.id);
        });

        area.appendChild(elementoSVG);
        pelotas.push(bola);
    }
}

// Mover las pelotas
function moverPelotas(area) {
    const ancho = area.clientWidth;
    const alto = area.clientHeight;

    pelotas.forEach(bola => {
        bola.x += bola.velocidadX;
        bola.y += bola.velocidadY;

// Rebotar en los bordes
        if (bola.x + bola.radio > ancho || bola.x - bola.radio < 0) {
            bola.velocidadX *= -1;
        }
        if (bola.y + bola.radio > alto || bola.y - bola.radio < 0) {
            bola.velocidadY *= -1;
        }

// Actualizar posición en el SVG
        const elemento = document.getElementById(bola.id);
        elemento.setAttribute("cx", bola.x);
        elemento.setAttribute("cy", bola.y);
    });
}

// Inicialización en window.onload
window.onload = () => {
    const area = document.getElementById("area");

// Crear pelotas
    crearPelotas(area);

// Iniciar movimiento con setInterval
    setInterval(() => {
        moverPelotas(area);
    }, 2);
};
