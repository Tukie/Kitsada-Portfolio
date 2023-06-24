function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addFadeInClass() {
  var fadeIns = document.getElementsByClassName("animate_stich");
  for (var i = 0; i < fadeIns.length; i++) {
    if (isElementInViewport(fadeIns[i])) {
      //   var randomClass = Math.random() < 0.5 ? "animate__fadeIn" : "animate__fadeInUp";
      fadeIns[i].classList.add("animate__fadeIn");
    } 
  }
}

window.addEventListener("scroll", addFadeInClass);
window.addEventListener("load", addFadeInClass);
