// Create the map object with options
var map = L.map('map').setView([20, 0], 2);

// Add a tile layer
var streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define the GeoJSON URL for earthquakes
var geojsonURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

// Fetch the GeoJSON data for earthquakes
d3.json(geojsonURL).then(function(data) {
  // Define a function to style the data points
  function styleInfo(feature) {
    return {
      radius: getRadius(feature.properties.mag),
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }

  // Define a function to determine the radius of the earthquake markers based on magnitude
  function getRadius(magnitude) {
    return magnitude * 4;
  }

  // Define a function to determine the color of the earthquake markers based on depth
  function getColor(depth) {
    if (depth > 90) {
      return "#ea2c2c";
    } else if (depth > 70) {
      return "#ea822c";
    } else if (depth > 50) {
      return "#ee9c00";
    } else if (depth > 30) {
      return "#eecc00";
    } else if (depth > 10) {
      return "#d4ee00";
    } else {
      return "#98ee00";
    }
  }

  // Create a GeoJSON layer with the data
  var earthquakes = L.geoJSON(data, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2] + " km");
    }
  }).addTo(map);

  // Define the tectonic plates URL
  var tectonicPlatesURL = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

  // Fetch and visualize the tectonic plates data
  d3.json(tectonicPlatesURL).then(function(data) {
    var tectonicPlates = L.geoJSON(data, {
      style: function() {
        return { color: "yellow", weight: 2 };
      }
    }).addTo(map);

    // Add layer controls
    var baseMaps = {
      "Street Map": streetMap,
      "Topographic Map": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://opentopomap.org/about#licence">OpenTopoMap</a> contributors'
      })
    };

    var overlayMaps = {
      "Earthquakes": earthquakes,
      "Tectonic Plates": tectonicPlates
    };

    L.control.layers(baseMaps, overlayMaps).addTo(map);
  });

  // Add a legend to the map
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function(map) {
    var div = L.DomUtil.create("div", "info legend");
    var grades = [-10, 10, 30, 50, 70, 90];
    var colors = ["#98ee00", "#d4ee00", "#eecc00", "#ee9c00", "#ea822c", "#ea2c2c"];

    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " +
        grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }
    return div;
  };

  legend.addTo(map);
});

