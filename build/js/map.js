var CONTAINER_SELECTOR = ".map";
var MARKER_ICON = "img/icon-map-marker.svg";
var MAP_LOADED_CLASS = "map--loaded";
var ADDRESS = {
  lat: 59.936246,
  lng: 30.321836
};

var center;
var map;

function initMap() {
  var container = document.querySelector(CONTAINER_SELECTOR);

  container.classList.add(MAP_LOADED_CLASS);
  createMap(container);
  google.maps.event.addDomListener(window, "resize", onResize);
}
function onResize() {
  google.maps.event.trigger(map, "resize");
  map.setCenter(center);
}

function createMap(container) {
  center = new google.maps.LatLng(ADDRESS.lat, ADDRESS.lng);
  map = new google.maps.Map(container, {
    center: ADDRESS,
    scrollwheel: false,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: ADDRESS,
    map: map,
    icon: MARKER_ICON
  });
}
