function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Ajouter la classe "active" à l'élément de la barre de navigation correspondant à la page actuelle
var currentLocation = window.location.href;
var navLinks = document.querySelectorAll('.topnav a');
navLinks.forEach(function (link) {
  if (link.href === currentLocation) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});