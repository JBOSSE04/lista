//Class bola reutilizada de las actividades
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

    crearElementoSVG(){
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



let pelotas= [];
const numPelotas = 1;

function crearPelotas(area){
    const ancho = area.clientWidth;
    const alto = area.clientHeight;

    for(let i = 0;1 < numPelotas; i ++){
        const radio = 20 ;
        const x = Math.floor(Math.random() * (ancho - radio*2)) + radio;
        const y = Math.floor(Math.random() * (alto - radio*2)) + radio;
        const velocidadX = Math.random() * 10 -1;
        const velocidadY = Math.random() * 10 -1;
        const bola = new Bola(`bola-${1}`, x, y, radio, velocidadX, velocidadY);

        const elementoSVG = bola.crearElementoSVG();

        area.appendChild(elementoSVG);
        pelotas.push(bola);
    }
}

function moverPelotas(area) {
    const ancho = area.clientWidth;
    const alto = area.clientHeight;

    pelotas.forEach(bola => {
        bola.x += bola.velocidadX;
        bola.y += bola.velocidadY;

        if (bola.x + bola.radio > ancho || bola.x - bola.radio < 0) {
            bola.velocidadX *= -1;
        }
        if (bola.y + bola.radio > alto || bola.y - bola.radio < 0) {
            bola.velocidadY *= -1;
        }

        const elemento = document.getElementById(bola.id);
        elemento.setAttribute("cx", bola.x);
        elemento.setAttribute("cy", bola.y);
    });
}


function movePlayer(){
    document.addEventListener("keydown")

}




window.onload = () => {
    const area = document.getElementById("area");

    crearPelotas(area);

    setInterval(() => {
        moverPelotas(area);
    }, 2);

    function start(){
        document.getElementById("startButton").addEventListener("click",() => {
            document.getElementById("index").style.display = "none";
            document.getElementById("game").style.display = "flex";
            config();
            movePlayer();
            window.requestAnimationFrame(moveBall);
        })
    }
};
