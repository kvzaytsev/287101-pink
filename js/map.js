var CONTAINER_SELECTOR = ".map";
var MARKER_ICON = "img/icon-map-marker.svg";
var MAP_LOADED_CLASS = "map--loaded";
var ADDRESS = {
  lat: 59.936246,
  lng: 30.321836
};

var map;

function initMap() {
  var container = document.querySelector(CONTAINER_SELECTOR);

  container.classList.add(MAP_LOADED_CLASS);
  createMap(container);
  window.addEventListener('resize', throttle(centerMap, 100), true);
}

function createMap(container) {
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

function centerMap(){
  var center = new google.maps.LatLng(ADDRESS.lat, ADDRESS.lng);
  map.panTo(center);
}

function throttle(fn, ms) {
  var waiting = false;

  function throttled() {
    if (waiting) {
      return
    }

    fn();
    waiting = true;

    setTimeout(
      function() {
        waiting = false;
        throttled()
      },
      ms
    );
  }

  return throttled;
}
