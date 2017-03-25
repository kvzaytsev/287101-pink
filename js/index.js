var HEADER_SELECTOR = ".page-header";
var TOGGLE_SELECTOR = ".js-menu-toggle";

var NO_JS_CLASS = "no-js";
var MENU_CLOSE_CLASS = "menu-closed";

var SOMETHING_WENT_WRONG = "Что-то пошло не так :(";

var warn = function (message) {
  console.warn(message);
};

if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

function init() {
  var header = document.querySelector(HEADER_SELECTOR);
  var toggle = document.querySelector(TOGGLE_SELECTOR);

  if (header && toggle) {
    removeClassIfExists(header.classList);
    header.classList.add(MENU_CLOSE_CLASS);
    toggle.addEventListener("click", onToggleClick.bind(header));
  } else {
    warn(SOMETHING_WENT_WRONG);
  }
}

function onToggleClick() {
  this.classList.contains(MENU_CLOSE_CLASS)
    ? this.classList.remove(MENU_CLOSE_CLASS)
    : this.classList.add(MENU_CLOSE_CLASS);
}

function removeClassIfExists(classList) {
  classList.contains(NO_JS_CLASS) && classList.remove(NO_JS_CLASS);
}
