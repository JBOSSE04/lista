window.onload = function(){
    let alfabeto = document.getElementById("alfabeto");
    let categoriaPantalla = document.getElementById("categoria");
    let palabraPantalla = document.getElementById("palabra");
    let vidasPantalla = document.getElementById("vidas");
    let letras;
    let categoria;
    let palabra;
    let vidas;
    let boton = document.getElementById("reiniciar");


    const palabrasPorCategoria = [
        { categoria: "Colores", palabras: ["rojo", "amarillo", "azul"] },
        { categoria: "Países", palabras: ["portugal", "italia", "francia"] }
        
    ];

    function iniciar(){

        alfabeto.innerHTML = "";

        for(let i = 97; i <= 122; i++){
            alfabeto.innerHTML += '<div class="letra">' + String.fromCharCode(i) + '</div>';
        }

        letras = document.getElementsByClassName("letra");

        categoria = palabrasPorCategoria[Math.floor(Math.random() * palabrasPorCategoria.length)];
        categoriaPantalla.innerHTML = `The Choosen Category is ${categoria.categoria}`;

        palabra = categoria.palabras[Math.floor(Math.random() * categoria.palabras.length)];

        function ocultarPalabra(palabra){
            return Array(palabra.length).fill(" _ ");
        }

        let palabraOculta = ocultarPalabra(palabra)

        function pintar(vidas){
            palabraPantalla.innerHTML = palabraOculta.join(" ");
            vidasPantalla.innerHTML = `You have ${vidas} lives`;
        }

        vidas = 10;
        pintar(vidas);

    

        for(let letra of letras){
            letra.addEventListener("click", (e) => {
                let seleccionar = e.target.textContent;
                let letraCorrecta = false;
            
                for (let i = 0; i < palabra.length; i++) {
                    if (palabra[i] == seleccionar) {
                        palabraOculta[i] = seleccionar;
                        letraCorrecta = true;
                    }
                }

                if (!letraCorrecta) {
                    vidas--;
                }

                pintar(vidas);

                e.target.style.pointerEvents = "none";
                e.target.style.opacity = "0.5";

                if(vidas == 0){
                    vidasPantalla.innerHTML = "¡Has perdido!"
                    for(let letra of letras){
                        letra.style.pointerEvents = "none";
                        letra.style.opacity = "0.5";
                    }
                    boton.style.display = "block";
                }
    
                if(!palabraPantalla.innerHTML.includes("_")){
                    vidasPantalla.innerHTML = "Has ganado";
                    for(let letra of letras){
                        letra.style.pointerEvents = "none";
                        letra.style.opacity = "0.5";
                    }
                    boton.style.display = "block";
                }

            });
        }
    }

    iniciar();

    boton.addEventListener("click", () => {
        iniciar();
        boton.style.display = "none";
    });

}