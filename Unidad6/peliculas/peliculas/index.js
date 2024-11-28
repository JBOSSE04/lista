window.onload = () => {
    const input = document.getElementById("input");
    const buscarPeliculas = document.getElementById("buscarPeliculas");
    const buscarSeries = document.getElementById("buscarSeries");
    const cerrarModal = document.getElementById("cerrarModal");
    const cerrarInforme = document.getElementById("cerrarInforme");
    const crearInforme = document.getElementById("crearInforme");

    let tipoBusqueda = "movie"; // Por defecto, buscar películas
    let pagina = 1;
    let textoBusqueda = "";
    let resultadosTotales = [];

    // Función para manejar la búsqueda de películas o series
    buscarPeliculas.addEventListener("click", () => {
        tipoBusqueda = "movie";
        document.querySelector(".search-container").classList.remove("hidden");
        realizarBusqueda();
    });

    buscarSeries.addEventListener("click", () => {
        tipoBusqueda = "series";
        document.querySelector(".search-container").classList.remove("hidden");
        realizarBusqueda();
    });

    input.addEventListener("input", () => {
        if (input.value.length >= 3) {
            textoBusqueda = input.value;
            pagina = 1;
            resultadosTotales = [];
            realizarBusqueda();
        }
    });

    // Cerrar el modal de detalles
    cerrarModal.addEventListener("click", () => {
        document.getElementById("detalleModal").classList.add("hidden");
    });

    // Cerrar el modal de informe
    cerrarInforme.addEventListener("click", () => {
        document.getElementById("informeModal").classList.add("hidden");
    });

    // Crear el informe
    crearInforme.addEventListener("click", generarInforme);

    // Función que realiza la búsqueda
    function realizarBusqueda() {
        const url = `https://www.omdbapi.com/?apikey=35a3c92a&s=${textoBusqueda}&type=${tipoBusqueda}&page=${pagina}`;
        pagina++;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.Search) {
                    const listaPeliculas = document.getElementById("listaPeliculas");
                    listaPeliculas.innerHTML = ""; // Limpiar resultados previos
                    data.Search.forEach((item) => {
                        resultadosTotales.push(item);

                        const div = document.createElement("div");
                        div.className = "pelicula";

                        const img = document.createElement("img");
                        img.src = item.Poster !== "N/A" ? item.Poster : "placeholder.jpg";
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

                    // Implementar scroll infinito
                    window.addEventListener("scroll", () => {
                        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                            realizarBusqueda(); // Cargar más resultados al llegar al final
                        }
                    });
                }
            });
    }

    // Función para mostrar los detalles de la película
    function mostrarDetalle(id) {
        const url = `https://www.omdbapi.com/?apikey=35a3c92a&i=${id}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
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
            });
    }

    // Función para generar el informe
    function generarInforme() {
        const sortedMovies = resultadosTotales.sort((a, b) => b.imdbRating - a.imdbRating).slice(0, 5);

        const canvas = document.getElementById("graficoInforme");
        const ctx = canvas.getContext("2d");

        const labels = sortedMovies.map(movie => movie.Title);
        const data = sortedMovies.map(movie => parseFloat(movie.imdbRating));

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'IMDb Rating',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const listaInforme = document.getElementById("listaInforme");
        listaInforme.innerHTML = ""; // Limpiar lista previa
        sortedMovies.forEach(movie => {
            const li = document.createElement("li");
            li.textContent = `${movie.Title} - IMDb Rating: ${movie.imdbRating}`;
            listaInforme.appendChild(li);
        });

        document.getElementById("informeModal").classList.remove("hidden");
    }
};

