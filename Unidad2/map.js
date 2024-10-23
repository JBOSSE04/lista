
function success(pos) {
    const crd = pos.coords;
      
    console.log( pos.crd.latitude);
    console.log( pos.crd.longitude);

    var map = L.map('map').setView([pos.crd.latitude, pos.crd.longitude], 13);
    var marker = L.marker([pos.crd.latitude, pos.crd.longitude]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

  }
  



navigator.geolocation.watchPosition(success, error);
