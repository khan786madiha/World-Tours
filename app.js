const qna = document.querySelector(".qna");
const btn = document.querySelector(".qna__icon");
const btn2 = document.querySelector(".qna__icon-2");
const nav__ul = document.querySelector(".nav__ul");
const burger = document.querySelector(".nav__burger");
const top_bottom = document.querySelector(".top-bottom");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    top_bottom.classList.add("top-bottom__show");
  } else {
    top_bottom.classList.remove("top-bottom__show");
  }
});
burger.addEventListener("click", () => {
  nav__ul.classList.toggle("nav__show");
  burger.classList.toggle("nav__toggle");
});
btn.addEventListener("click", () => {
  qna.classList.toggle("qna__show");
  qna.classList.remove("qna__show-2");
});
btn2.addEventListener("click", () => {
  qna.classList.toggle("qna__show-2");
  qna.classList.remove("qna__show");
});

// scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
});