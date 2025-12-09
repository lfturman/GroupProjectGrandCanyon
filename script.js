async function initMap() {
  const { Map3DElement, MapMode } = await google.maps.importLibrary("maps3d");

  const map = new Map3DElement({
    center: { lat: 36.0544, lng: -112.1401, altitude: 2500 },
    tilt: 65,
    heading: -45,
    range: 20000,
    mode: MapMode.HYBRID,
  });

  document.getElementById('map').appendChild(map);
}

initMap();