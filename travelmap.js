// 42.7466° N latitude and -75.7700 W longitude
var coordinates = [42.7466, -75.7700];
var palce1 = [40.7128, 74.0060];
var palce2 = [40.6501, -73.9496];
var palce3 = [40.7136, -73.8281];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from New York City</p>").addTo(map);
var marker1 = L.circle(place1,{colo: "Black", fillColor: "#0ca607", radius: 80}).addTo(map);
