# Earthquake Visualization - Module 15 Challenge

## Overview
This project visualizes earthquake data and tectonic plates on an interactive map using Leaflet.js, D3.js, and GeoJSON data. The project is divided into two parts:

1. **Part 1: Earthquake Visualization** - Plots earthquake data on the map.
2. **Part 2: Earthquake and Tectonic Plates Visualization** - Enhances the map with tectonic plates data, additional base maps, and layer controls.

## Setup and Running the Project

### Prerequisites
- Python installed on your machine.
- Internet connection to fetch external libraries from CDNs.

### Steps to Run
1. **Navigate to the Project Directory**:
   ```sh
   cd Leaflet-Visualization

2. **Start a Local Server**:
	```sh
	python -m http.server 8000

3. **Open Your Browser**:

-   Go to  `http://localhost:8000/part1_earthquake_visualization_index.html`  to view Part 1.
-   Go to  `http://localhost:8000/part2_earthquake_tectonic_plates_index.html`  to view Part 2.

### Code Explanation

#### Part 1: Earthquake Visualization

-   **HTML**: Sets up the basic structure and links to Leaflet, D3, CSS, and JS files.
-   **CSS**: Styles the map and body to ensure they take up the full screen.
-   **JavaScript**: Fetches earthquake data from the USGS GeoJSON feed, styles the markers based on magnitude and depth, and adds them to the map.

#### Part 2: Earthquake and Tectonic Plates Visualization

-   **HTML**: Similar to Part 1 but points to different CSS and JS files.
-   **CSS**: Similar styling to Part 1.
-   **JavaScript**: Fetches and displays tectonic plates data from a GeoJSON file, adds multiple base maps (street map and topographic map), adds layer controls to toggle between different layers, and adds a legend to show the depth of earthquakes.

### Data Sources

-   **Earthquake Data**:  USGS Earthquake GeoJSON Feed
-   **Tectonic Plates Data**:  [GitHub Repository - fraxen/tectonicplates](https://github.com/fraxen/tectonicplates)

### References

- Leaflet. "Leaflet API reference." Accessed June 10, 2024. [https://leafletjs.com/reference.html](https://leafletjs.com/reference.html).
- Bostock, Mike. "Leaflet." Accessed June 11, 2024. [https://bost.ocks.org/mike/leaflet/](https://bost.ocks.org/mike/leaflet/).
