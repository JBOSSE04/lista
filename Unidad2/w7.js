// La API de geolocalización permite al usuario proporcionar su ubicación a las aplicaciones web si así lo desea. Por razones de privacidad, se le solicita al usuario permiso para compartir la información de su ubicación.

// La API de geolocalización se publica a través del objeto navigator.geolocation. Si el objeto existe, los servicios de geolocalización están disponibles.

// Desarrolla una aplicación web en la que:
// Se pruebe si la geolocalización está disponible.
// Si está disponible, se muestre la posición actual (latitud y longitud).
// Si no está disponible, se muestre un mensaje para cada uno de los posibles errores.
// Mejora el código para mostrar la posición de manera continua (aunque el usuario podría estar en movimiento, por lo que podría cambiar).
// Encuentra la forma de medir la distancia recorrida.
// 
//Intentemos utilizar la información de geolocalización con la API de Here Maps.
// Usa un mapa para mostrar tu ubicación.
// Dibuja un marcador en tu ubicación.
// Diseña una forma de calcular y dibujar la ruta desde tu ubicación actual hasta un lugar determinado.
// Encuentra una forma de saber la dirección de tu ubicación (geocodificación inversa).
//
//Repite el ejercicio 2 utilizando otra librería de mapas, como Google Maps, Leaflet, etc.
//
//Intenta completar el ejercicio 2 con estas nuevas características:
// Busca la forma de animar tu marcador.
// Dibuja la posición del usuario correctamente, incluso si está en movimiento.
// Dibuja la ruta del usuario sobre el mapa.


// //1
// // Check if geolocation is available
// if (navigator.geolocation) {
//   console.log("Geolocation is available");
//   getLocation();
// } else {
//   console.log("Geolocation is not available");
//   document.getElementById("error").innerHTML = "Geolocation is not supported by your browser";
// }

// // Function to get the current position
// function getLocation() {
//   navigator.geolocation.getCurrentPosition(showPosition, showError);
// }

// // Function to show the current position
// function showPosition(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   document.getElementById("location").innerHTML = `Latitude: ${latitude}°, Longitude: ${longitude}°`;

//   // Continuously update the position
//   navigator.geolocation.watchPosition(showPosition, showError);
// }

// // Function to show errors
// function showError(error) {
//   switch (error.code) {
//       case error.PERMISSION_DENIED:
//           document.getElementById("error").innerHTML = "User denied the request for Geolocation";
//           break;
//       case error.POSITION_UNAVAILABLE:
//           document.getElementById("error").innerHTML = "Location information is unavailable";
//           break;
//       case error.TIMEOUT:
//           document.getElementById("error").innerHTML = "The request to get user location timed out";
//           break;
//       case error.UNKNOWN_ERROR:
//           document.getElementById("error").innerHTML = "An unknown error occurred";
//           break;
//   }
// }

// // Function to calculate the distance traveled
// let previousPosition;
// function calculateDistanceTraveled(position) {
//   if (previousPosition) {
//       const lat1 = previousPosition.coords.latitude;
//       const lon1 = previousPosition.coords.longitude;
//       const lat2 = position.coords.latitude;
//       const lon2 = position.coords.longitude;

//       const R = 6371; // Radius of the Earth in km
//       const dLat = (lat2 - lat1) * Math.PI / 180;
//       const dLon = (lon2 - lon1) * Math.PI / 180;
//       const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       const distance = R * c;

//       console.log(`Distance traveled: ${distance} km`);
//   }
//   previousPosition = position;
// }

// // Call the calculateDistanceTraveled function when the position changes
// function showPosition(position) {
//   // ...
//   calculateDistanceTraveled(position);
// }

///////////////////////////////////////
// Check if geolocation is available
// if (navigator.geolocation) {
//   console.log("Geolocation is available");
//   getLocation();
// } else {
//   console.log("Geolocation is not available");
//   document.write("Geolocation is not supported by your browser");
// }

// // Function to get the current position
// function getLocation() {
//   navigator.geolocation.getCurrentPosition(showPosition, showError);
// }

// // Function to show the current position
// function showPosition(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   document.write(`Latitude: ${latitude}°, Longitude: ${longitude}°`);

//   // Continuously update the position
//   navigator.geolocation.watchPosition(showPosition, showError);
// }

// // Function to show errors
// function showError(error) {
//   switch (error.code) {
//       case error.PERMISSION_DENIED:
//           document.write("User  denied the request for Geolocation");
//           break;
//       case error.POSITION_UNAVAILABLE:
//           document.write("Location information is unavailable");
//           break;
//       case error.TIMEOUT:
//           document.write("The request to get user location timed out");
//           break;
//       case error.UNKNOWN_ERROR:
//           document.write("An unknown error occurred");
//           break;
//   }
// }

//
// let previousPosition;
// function calculateDistanceTraveled(position) {
//   if (previousPosition) {
//       const lat1 = previousPosition.coords.latitude;
//       const lon1 = previousPosition.coords.longitude;
//       const lat2 = position.coords.latitude;
//       const lon2 = position.coords.longitude;

//       const R = 6371; // Radius of the Earth in km
//       const dLat = (lat2 - lat1) * Math.PI / 180;
//       const dLon = (lon2 - lon1) * Math.PI / 180;
//       const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       const distance = R * c;

//       document.write(`Distance traveled: ${distance} km`);
//   }
//   previousPosition = position;
// }

// 
// function showPosition(position) {
//   // ...
//   calculateDistanceTraveled(position);
// }



// //2

navigator.geolocation.watchPosition(position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const map = L.map('map').setView([latitude, longitude], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
  }).addTo(map);

  const marker = L.marker([latitude, longitude]).addTo(map);
});

document.addEventListener("DOMContentLoaded", function() {
  L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.9.4/dist/images/';
});



//3
//Design a way to calculate and draw the route from my current location to a given place.
//Find a way to know the address of your location (reverse geocoding).


// let map, marker, routingControl;

// navigator.geolocation.watchPosition(position => {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   if (!map) {
//     map = L.map('map').setView([latitude, longitude], 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
//       subdomains: ['a', 'b', 'c']
//     }).addTo(map);

//     marker = L.marker([latitude, longitude]).addTo(map);

//     routingControl = L.Routing.control({
//       waypoints: [L.latLng(latitude, longitude)],
//       routeWhileDragging: true
//     }).addTo(map);
//   } else {
//     marker.setLatLng([latitude, longitude]);
//     map.setView([latitude, longitude]);
//     routingControl.spliceWaypoints(0, 1, L.latLng(latitude, longitude));
//   }

//   reverseGeocode(latitude, longitude);
// });

// function reverseGeocode(lat, lon) {
//   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
  
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const direccion = data.display_name;
//       console.log("Current address:", direccion);
//     })
//     .catch(error => console.error("Error:", error));
// }

// function setDestination(destLat, destLng) {
//   routingControl.spliceWaypoints(routingControl.getWaypoints().length - 1, 1, L.latLng(destLat, destLng));
// }

// document.addEventListener("DOMContentLoaded", function() {
//   L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.9.4/dist/images/';
// });



document.addEventListener("DOMContentLoaded", function() {
  // Comprobamos si la geolocalización está disponible
  if (navigator.geolocation) {
      navigator.geolocation.watchPosition(mostrarPosicion, manejarError, {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 5000
      });
  } else {
      alert("La geolocalización no es compatible con este navegador.");
  }

  // Variables globales
  let mapa;
  let marcador;
  let polilinea;
  let ruta = [];

  // Función para mostrar la posición del usuario y dibujar la ruta
  function mostrarPosicion(posicion) {
      const latitud = posicion.coords.latitude;
      const longitud = posicion.coords.longitude;
      
      if (!mapa) {
          // Inicializamos el mapa en la primera posición recibida
          mapa = L.map('mapa').setView([latitud, longitud], 13);
      
          // Añadimos la capa de OpenStreetMap
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(mapa);

          // Inicializamos la polilínea (ruta) con la primera posición
          polilinea = L.polyline([], { color: 'blue', weight: 5, opacity: 0.7 }).addTo(mapa);
      }

      // Actualizamos el marcador de la ubicación actual
      if (!marcador) {
          marcador = L.marker([latitud, longitud]).addTo(mapa).bindPopup("Tu ubicación actual").openPopup();
      } else {
          marcador.setLatLng([latitud, longitud]);
      }

      // Añadimos el punto actual a la ruta
      ruta.push([latitud, longitud]);
      polilinea.setLatLngs(ruta);  // Actualizamos la polilínea con los nuevos puntos

      // Ajustamos la vista del mapa para que siga al usuario
      mapa.setView([latitud, longitud], 13);
  }

  
});
