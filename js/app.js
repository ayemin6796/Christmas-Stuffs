$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      item: 1,
    },
    600: {
      item: 2,
    },
    1000: {
      item: 3,
    },
  },
});
let bar = document.querySelector(".navbar");
let head = document.querySelector(".nav__head");
let scroll = document.querySelector(".scroll-up");

var waypoint = new Waypoint({
  element: document.getElementById("celebrate"),
  handler: function (direction) {
    if (direction == "down") {
      bar.classList.add("nav__head", "shadow");
      scroll.style.display = "block";
    } else {
      bar.classList.remove("nav__head", "shadow");
      scroll.style.display = "none";
    }
  },
  offset: "25%",
});

// let fullHeart = document.querySelectorAll(".full_gift_heart");
let firstHeart = document.querySelectorAll(".first_heart");

firstHeart.forEach((el) => {
  el.addEventListener("click", (_) => {
    el.classList.toggle("fa-solid");
    el.classList.toggle("fa-regular");
  });
});

let newHeart = document.querySelectorAll(".new-heart");
newHeart.forEach((el) => {
  el.addEventListener("click", (_) => {
    el.classList.toggle("fa-solid");
    el.classList.toggle("fa-regular", "white");
  });
});

let moon = document.querySelector(".moon");
moon.addEventListener("click", (_) => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    moon.classList.toggle("fa-moon", "fa-sun-bright");
  }
});
// firstHeart.addEventListener("click", function () {
//   if (firstHeart) {
//     fullHeart.style.display = "block";
//     firstHeart.style.display = "none";
//   }
// });
// fullHeart.addEventListener("click", function () {
//   if (fullHeart) {
//     firstHeart.style.display = "block";
//     fullHeart.style.display = "none";
//   }
// });
