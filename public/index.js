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

// Regex for validation
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// actions on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form["name"].value;
  const email = form["email"].value;

  // form validation
  if (name == "") {
    console.log(`name is invalid`);
  } else if (!email.match(pattern)) {
    console.log(`email is invalid`);
  } else {
    alert("form submited");
  }
});
