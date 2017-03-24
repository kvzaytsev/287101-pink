var CONTAINER_SELECTOR = ".map";

var ADDRESS = {
  lat: 59.9387942,
  long: 30.3208946
};

var warn = function (message) {
  console.warn(message);
};

if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

function init() {

}
