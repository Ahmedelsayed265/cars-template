let swiper = new Swiper(".mySwiper", {
  spaceBetween: 70,
  slidesPerView: 3,
  grabCursor: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    350: {
      slidesPerView: 1
    }
  }
});
let navLinks = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 110) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
let menu = document.querySelector(".menu");
let links = document.querySelectorAll(".nav-link a");
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  document.querySelector("body").classList.toggle("noscroll");
  document.querySelector("nav").classList.toggle("opened");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector("nav").classList.remove("opened");
      menu.classList.remove("open");
    });
  });
});
