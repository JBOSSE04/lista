window.onload = () => {
    const input = document.getElementById("input");
    const buscarPeliculas = document.getElementById("buscarPeliculas");
    const buscarSeries = document.getElementById("buscarSeries");
    const cerrarModal = document.getElementById("cerrarModal");
    const cerrarInforme = document.getElementById("cerrarInforme");
    const crearInforme = document.getElementById("crearInforme");

    let tipoBusqueda = "movie";  
    let pagina = 1;
    let textoBusqueda = "";
    let resultadosTotales = [];
    let isLoading = false;

    buscarPeliculas.addEventListener("click", () => {
        tipoBusqueda = "movie";
        iniciarBusqueda();
    });

 
 

    buscarSeries.addEventListener("click", () => {
        tipoBusqueda = "series";
        iniciarBusqueda();
    });

    input.addEventListener("input", () => {
        if (input.value.length >= 3) {
            textoBusqueda = input.value;
            pagina = 1;
            resultadosTotales = [];
            realizarBusqueda();
        }
    });

    cerrarModal.addEventListener("click", () => {
        document.getElementById("detalleModal").classList.add("hidden");
    });

    cerrarInforme.addEventListener("click", () => {
        document.getElementById("informeModal").classList.add("hidden");
    });

    crearInforme.addEventListener("click", generarInforme);




    window.addEventListener("scroll", () => {
        if (!isLoading && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            realizarBusqueda();
        }
    });



    function iniciarBusqueda() {
        document.querySelector(".search-container").classList.remove("hidden");
        document.getElementById("listaPeliculas").innerHTML = ""; 
        textoBusqueda = input.value;
        pagina = 1;
        resultadosTotales = [];
        realizarBusqueda();
    }



    function realizarBusqueda() {
        if (textoBusqueda.length < 3) return;
    
        isLoading = true;
        document.getElementById("loader").classList.remove("hidden"); // Mostrar loader
    
        const url = `https://www.omdbapi.com/?apikey=35a3c92a&s=${textoBusqueda}&type=${tipoBusqueda}&page=${pagina}`;
        pagina++;
    
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.Search) {
                    const listaPeliculas = document.getElementById("listaPeliculas");
                    data.Search.forEach((item) => {
                        resultadosTotales.push(item);
    
                        const div = document.createElement("div");
                        div.className = "pelicula";
    
                        const img = document.createElement("img");
                        img.src = item.Poster !== "N/A" ? item.Poster : "nofoto.avif";
                        img.alt = item.Title;
    
                        img.addEventListener("click", () => mostrarDetalle(item.imdbID));
    
                        const titulo = document.createElement("p");
                        titulo.textContent = `${item.Title} (${item.Year})`;
    
                        div.appendChild(img);
                        div.appendChild(titulo);
                        listaPeliculas.appendChild(div);
                    });
    
                    document.getElementById("resultados").classList.remove("hidden");
                    crearInforme.classList.remove("hidden");
                }
                isLoading = false;
            })
            .finally(() => {
                document.getElementById("loader").classList.add("hidden"); 
            });
    }
    

    function mostrarDetalle(id) {
        document.getElementById("loader").classList.remove("hidden"); 
    
        const url = `https://www.omdbapi.com/?apikey=35a3c92a&i=${id}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                document.getElementById("imagenDetalle").src = data.Poster !== "N/A" ? data.Poster : "nofoto.avif";
                document.getElementById("tituloDetalle").textContent = data.Title;
                document.getElementById("anioDetalle").textContent = data.Year;
                document.getElementById("directorDetalle").textContent = data.Director;
                document.getElementById("actoresDetalle").textContent = data.Actors;
                document.getElementById("sinopsisDetalle").textContent = data.Plot;
    
                const ratingsContainer = document.getElementById("ratingsDetalle");
                ratingsContainer.innerHTML = "";
                data.Ratings.forEach((rating) => {
                    const p = document.createElement("p");
                    p.textContent = `${rating.Source}: ${rating.Value}`;
                    ratingsContainer.appendChild(p);
                });
    
                document.getElementById("detalleModal").classList.remove("hidden");
            })
            .finally(() => {
                document.getElementById("loader").classList.add("hidden"); // Ocultar loader
            });
    }
    
 
      
    
        function generarInforme() {
            // Obtener ratings detallados para cada película/serie
            const promesas = resultadosTotales.map(item => 
                fetch(`https://www.omdbapi.com/?apikey=35a3c92a&i=${item.imdbID}`)
                    .then(response => response.json())
            );
    
            Promise.all(promesas).then(resultados => {
                const itemsConRating = resultados.filter(item => item.imdbRating && item.imdbRating !== "N/A");
                const sortedItems = itemsConRating.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating)).slice(0, 5);
    
                // Crear grafico
                google.charts.load('current', {'packages':['corechart']});
                google.charts.setOnLoadCallback(() => drawChart(sortedItems));
    
                // Listar las mejores películas/series en el informe
                const listaInforme = document.getElementById("listaInforme");
                listaInforme.innerHTML = ""; 
                sortedItems.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = `${item.Title} (${item.Year}) - IMDb Rating: ${item.imdbRating}`;
                    listaInforme.appendChild(li);
                });
    
                document.getElementById("informeModal").classList.remove("hidden");
            });
        }
    
        function drawChart(items) {
            const dataTable = new google.visualization.DataTable();
            dataTable.addColumn('string', 'Title');
            dataTable.addColumn('number', 'IMDb Rating');
            
            items.forEach(item => {
                dataTable.addRow([`${item.Title} (${item.Year})`, parseFloat(item.imdbRating)]);
            });
    
            const options = {
                title: `Top 5 ${tipoBusqueda === 'movie' ? 'Películas' : 'Series'} Más Valoradas`,
                bar: { groupWidth: '95%' },
                legend: { position: 'none' },
            };
    
            const chart = new google.visualization.BarChart(document.getElementById('graficoInforme'));
            chart.draw(dataTable, options);
        }
    
};