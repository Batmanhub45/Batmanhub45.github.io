// 40.7128° N latitude and 74.0060° W
var coordinates = [40.7128, 74.0060];
var place1 = [40.7580, 73.9855];
var place2 = [40.6501, -73.9496];
var place3 = [40.7136, -73.8281];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from New York City</p>").addTo(map);
var marker1 = L.circle(place1,{color: "black", fillColor: "#0ca607", radius: 100}).bindPopup("<p>Hello, from Times Square").addTo(map);
var marker1 = L.circle(place2,{color: "black", fillColor: "#0ca607", radius: 100}).bindPopup("<p>Hello, from brooklyn").addTo(map);
var marker1 = L.circle(place3,{color: "black", fillColor: "#0ca607", radius: 100}).bindPopup("<p>Hello, from queens").addTo(map);
