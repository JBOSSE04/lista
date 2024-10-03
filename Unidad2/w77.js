document.addEventListener("DOMContentLoaded", function() {
    L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.9.4/dist/images/';

    let mapa, marcador, polilinea;
    const ruta = [];

    navigator.geolocation.watchPosition(position => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;

        // Si el mapa aún no se ha inicializado, lo creamos
        if (!mapa) {
            mapa = L.map('map').setView([latitud, longitud], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
                subdomains: ['a', 'b', 'c']
            }).addTo(mapa);

            // Inicializamos la polilínea para la ruta
            polilinea = L.polyline([], { color: 'blue', weight: 5, opacity: 0.7 }).addTo(mapa);
        }

        if (!marcador) {
            marcador = L.marker([latitud, longitud]).addTo(mapa).bindPopup("Tu ubicación actual").openPopup();
        } else {
            marcador.setLatLng([latitud, longitud]);
        }

        ruta.push([latitud, longitud]);
        polilinea.setLatLngs(ruta);

        // Centrar el mapa en la nueva ubicación
        mapa.setView([latitud, longitud], 13);
    });
});