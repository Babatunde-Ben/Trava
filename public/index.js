const btn = document.querySelectorAll(".cards .btn");
const cta = document.querySelector(" .cta");
const form = document.querySelector(".waitlist-form");

// pass element as a parameter to windowScroll function
// or pass data-id

function windowScroll() {
  window.scrollTo({
    top: 0,
    left: 0,
  });
}

cta.addEventListener("click", () => {
  windowScroll();
});
btn.forEach((item) => {
  item.addEventListener("click", () => {
    windowScroll();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("form submited");
});
