function dark_mode() {
  let elements = document.querySelectorAll(".light");
  elements.forEach(function (element) {
    element.classList.add("bg_dark");
  });

  let elements2 = document.querySelectorAll(".text-dark");
  elements2.forEach(function (element2) {
    element2.classList.remove("text-dark");
    element2.classList.add("text-light");
  });

  let elements3 = document.querySelectorAll(".text-secondary");
  elements3.forEach(function (element3) {
    element3.classList.remove("text-secondary");
    element3.classList.add("text-white");
  });

  let elements4 = document.querySelectorAll(".bg-light");
  elements4.forEach(function (element4) {
    element4.classList.remove("bg-light");
    element4.classList.add("bg_dark");
  });

  let elements5 = document.querySelectorAll(".bg_nav");
  elements5.forEach(function (element5) {
    element5.classList.remove("bg_nav");
    element5.classList.add("bg_nav_dark");
  });

  let elements6 = document.querySelectorAll(".no_dark");
  elements6.forEach(function (element6) {
    element6.classList.remove("bg-white");
    element6.classList.add("bg_dark_2");
  });

  let elements7 = document.querySelectorAll(".navbar");
  elements7.forEach(function (element7) {
    // element7.classList.remove("bg-white");
    element7.classList.add("navbar-dark");
  });

  let elements8 = document.querySelectorAll(".container-fluid");
  elements8.forEach(function (element8) {
    element8.classList.remove("bg-m1");
    element8.classList.add("bg_dark_2");
  });
}

//   light
function light_mode() {
  let elements = document.querySelectorAll(".bg_dark");
  elements.forEach(function (element) {
    element.classList.remove("bg_dark");
    element.classList.add("bg-light");
  });

  let elements2 = document.querySelectorAll(".text-light");
  elements2.forEach(function (element2) {
    element2.classList.remove("text-light");
    element2.classList.add("text-dark");
  });

  let elements3 = document.querySelectorAll(".text-white");
  elements3.forEach(function (element3) {
    element3.classList.remove("text-white");
    element3.classList.add("text-secondary");
  });

  let elements4 = document.querySelectorAll(".bg_dark");
  elements4.forEach(function (element4) {
    element4.classList.remove("bg_dark");
    element4.classList.add("bg-body");
  });

  let elements5 = document.querySelectorAll(".bg_nav_dark");
  elements5.forEach(function (element5) {
    element5.classList.remove("bg_nav_dark");
    element5.classList.add("bg_nav");
  });

  let elements6 = document.querySelectorAll(".current");
  elements6.forEach(function (element6) {
    element6.classList.remove("text-dark");
    element6.classList.add("text-light");
  });

  let elements7 = document.querySelectorAll(".no_dark");
  elements7.forEach(function (element7) {
    element7.classList.remove("bg_dark_2");
    element7.classList.add("bg-white");
  });

  let elements8 = document.querySelectorAll(".navbar");
  elements8.forEach(function (element8) {
    element8.classList.remove("navbar-dark");
    // element8.classList.add("navbar-dark");
  });

  let elements9 = document.querySelectorAll(".container-fluid");
  elements9.forEach(function (element9) {
    element9.classList.remove("bg_dark_2");
    element9.classList.add("bg-m1");
  });
}



// switch check
let isDarkMode = false;
let dark_light = document.getElementById('dark_light');
let dark_light2 = document.getElementById('dark_light2');

function toggleMode() {
  if (isDarkMode) {
    light_mode();
    isDarkMode = false;
    dark_light.innerHTML = '<i class="text-m1 fa-solid fa-moon"></i>'
    dark_light2.innerHTML = '<i class="text-m1 fa-solid fa-moon"></i>'
} else {
    dark_mode();
    isDarkMode = true;
    dark_light.innerHTML = '<i class="text-light fa-solid fa-sun"></i>'
    dark_light2.innerHTML = '<i class="text-light fa-solid fa-sun"></i>'
  }
}
