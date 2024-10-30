
window.onload = () => {
    document.getElementsByTagName('h4')[0].addEventListener("click", setColors);
    document.getElementById("easy").addEventListener("click", () => setDifficulty(3));
    document.getElementById("hard").addEventListener("click", () => setDifficulty(6));
    setDifficulty(6); 
};

let currentDifficulty = 6;

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

// Función para establecer la dificultad
function setDifficulty(difficulty) {
    currentDifficulty = difficulty;
    setColors();
}

// Generar colores aleatorios
function getColors() {
    let r = randomInt(256);
    let g = randomInt(256);
    let b = randomInt(256);
    return [r, g, b];
}

function setColors() {
    document.getElementById("resultado").style.backgroundColor = "RGB(45, 142, 153)";
    let colorArray = [];               
    let divs = document.getElementsByClassName('color');
    
    // Ocultar divs que no se usan
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none'; 
    }

    for (let i = 0; i < currentDifficulty; i++) {
        let color = getColors();
        divs[i].style.opacity = '100%';
        divs[i].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        divs[i].style.display = 'block'; 
        colorArray.push(color);
    }

    let randomIndex = randomInt(colorArray.length);
    let randomColor = colorArray[randomIndex];
    document.getElementById('codigo').innerHTML = `RGB(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;

    for (let i = 0; i < divs.length; i++) {
        divs[i].removeAttribute("id");
        divs[i].addEventListener("click", (e) => {
            if (e.target.style.backgroundColor == `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`) {
                document.getElementById("resultado").innerHTML = "Has  Acertado, sigue jugando";
                document.getElementById("resultado").style.backgroundColor = "green";
                
                setColors(); 
            } else {
                document.getElementById("resultado").innerHTML = "Sigue intentando";
                document.getElementById("resultado").style.backgroundColor = "red";
            }
        });
    }
}